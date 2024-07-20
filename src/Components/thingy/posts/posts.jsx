import React from "react";
import "./posts.css";

function Posts({ Post, flags }) {
  return (
    <div className="postCenter">
      <div style={{ width: "50%", padding: "1rem" }}>
        {Post
          ? Post.map((item) => (
              <div className="covidCard" key={item.rank}>
                <div className="covidInfo">
                  <div>
                    <p>
                      Country:{" "}
                      <span className="countryStatName">{item.name}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Cases: <span className="countryCases">{item.cases}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Deaths:{" "}
                      <span className="countryDeaths">{item.deaths}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Recovered:{" "}
                      <span className="countryRecovered">{item.recovered}</span>
                    </p>
                  </div>
                  <div>
                    <p>
                      Population:{" "}
                      <span className="countryPopulation">
                        {item.population}
                      </span>
                    </p>
                  </div>
                </div>

                <div className="flagHolder">
                  {flags[item.name] ? (
                    <img
                      src={flags[item.name]}
                      alt={`${item.name} flag`}
                      className="flag"
                    />
                  ) : (
                    <p>No flag available</p>
                  )}
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Posts;
