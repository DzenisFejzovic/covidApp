import React, { useEffect, useState } from "react";
import axios from "axios";
import Posts from "./posts/posts.jsx";
import Pagination from "./pagination/pagination.jsx";
import Input from "../search/input.jsx";
import { useLocation } from "react-router-dom";
import "./covid.css";

function Covidapi() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [flags, setFlags] = useState({});

  const location = useLocation();

  const postsPerPage = 10;

  const covidOptions = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": "4a46d368e7msh96543d45caacf18p12169bjsn53e25cb7379f",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  };

  const getData = async () => {
    try {
      const response = await axios.request(covidOptions);
      const covidData = response.data.response.map((item, index) => ({
        rank: index + 1,
        name: item.country,
        cases: item.cases.total,
        deaths: item.deaths.total,
        recovered: item.cases.recovered,
        population: item.population,
      }));
      setData(covidData);
      setFilteredData(covidData);
      fetchFlags(covidData.map((item) => item.name));
    } catch (error) {
      console.error(error);
    }
  };

  const fetchFlags = async (countries) => {
    try {
      const flagRequests = countries.map((country) => {
        const countryName = encodeURIComponent(country);
        return axios
          .get(`https://restcountries.com/v3.1/name/${countryName}`)
          .then((response) => ({
            country,
            flag: response.data[0].flags.png,
          }))
          .catch(() => ({
            country,
            flag: null,
          }));
      });

      const flagResponses = await Promise.all(flagRequests);
      const flags = flagResponses.reduce((acc, { country, flag }) => {
        acc[country] = flag;
        return acc;
      }, {});
      setFlags(flags);
    } catch (error) {
      console.error("Error fetching flags:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredData(filtered);
  }, [input, data]);

  const handleSearch = (e) => {
    setInput(e.target.value);
    setCurrentPage(1);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPost = filteredData.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      {location.pathname === "/covidStats" && (
        <div className="covidStatsCenter">
          <div>
            <Input valueProp={input} onChangeProp={handleSearch} />
            <div style={{ padding: "1rem" }}>
              <p className="covidStatsTitle">COVID-19 Statistics</p>
              <div>
                {filteredData.length <= 0 ? (
                  <p>No results found</p>
                ) : (
                  <Posts Post={currentPost} flags={flags} />
                )}
              </div>
              <Pagination
                totalPosts={filteredData.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Covidapi;
