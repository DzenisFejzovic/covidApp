import React, { useState, useEffect } from "react";
import "./country-stats.css";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";

const CountryStats = () => {
  const [date, setDate] = useState(dayjs("2022-04-17"));
  const [country, setCountry] = useState(null);
  const [countries, setCountries] = useState([]);
  const [covidData, setCovidData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const countryData = response.data.map((country) => ({
          name: country.name.common,
          flag: country.flags.png,
        }));
        setCountries(countryData);
      } catch (error) {
        console.error("Error fetching countries: ", error);
      }
    };

    fetchCountries();
  }, []);

  useEffect(() => {
    const fetchCovidData = async () => {
      if (!country) return;

      setLoading(true);
      try {
        const formattedDate = date.format("YYYY-MM-DD");
        const options = {
          method: "GET",
          url: "https://covid-193.p.rapidapi.com/history",
          params: {
            country: country.name,
            day: formattedDate,
          },
          headers: {
            "x-rapidapi-key":
              "4a46d368e7msh96543d45caacf18p12169bjsn53e25cb7379f",
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
          },
        };

        const response = await axios.request(options);
        const data = response.data.response[0]; // Assuming the response format
        setCovidData(data);
        setError(null);
      } catch (error) {
        setError(error);
        setCovidData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCovidData();
  }, [country, date]);

  const renderStatistics = () => {
    const isDataAvailable = covidData && Object.keys(covidData).length > 0;

    return (
      <>
        <div className="country-new-cases">
          <h3 className="blue">
            {loading
              ? "Loading..."
              : isDataAvailable
              ? covidData.cases.new || "N/A"
              : "Data not available"}
          </h3>
          <h3>New Cases</h3>
        </div>
        <div className="country-new-deaths">
          <h3 className="red">
            {loading
              ? "Loading..."
              : isDataAvailable
              ? covidData.deaths.new || "N/A"
              : "Data not available"}
          </h3>
          <h3>New Deaths</h3>
        </div>
        <div className="country-new-recovered">
          <h3 className="green">
            {loading
              ? "Loading..."
              : isDataAvailable
              ? covidData.cases.recovered || "N/A"
              : "Data not available"}
          </h3>
          <h3>New Recovered</h3>
        </div>
        <div className="country-total-active">
          <h3 className="grey">
            {loading
              ? "Loading..."
              : isDataAvailable
              ? covidData.cases.active || "N/A"
              : "Data not available"}
          </h3>
          <h3>Total Active</h3>
        </div>
      </>
    );
  };

  return (
    <div className="countrystats-container">
      <div className="menus">
        <div className="list-of-countries">
          <Autocomplete
            options={countries}
            getOptionLabel={(option) => option.name}
            value={country}
            onChange={(event, newValue) => setCountry(newValue)}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ display: "flex", alignItems: "center" }}
                {...props}
                key={option.name}
              >
                <img
                  loading="lazy"
                  width="20"
                  src={option.flag}
                  alt=""
                  style={{ marginRight: "10px" }}
                />
                {option.name}
              </Box>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Choose a country" fullWidth />
            )}
          />
        </div>
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Choose a date"
              value={date}
              onChange={(newValue) => setDate(newValue)}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>

      <div className="country-info">
        <div className="country-name">
          {country && (
            <>
              <h2>{country.name}</h2>
              <img
                src={country.flag}
                alt={`${country.name} flag`}
                className="flagCountryStats"
              />
            </>
          )}
        </div>

        <div className="country-statistics">{renderStatistics()}</div>
      </div>
    </div>
  );
};

export default CountryStats;
