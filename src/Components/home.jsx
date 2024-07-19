import React from "react";

import CovidMap from "./images/CovidMap.png";
import "./home.css";
function Home() {
  return (
    <>
      <div className="container">
        <div className="map">
          <img src={CovidMap} alt="" />
        </div>

        <div className="worldStats">
          <p className="worldStatsText">World stats</p>

          <div className="worldStatsHolder">
            <div className="statShowers"></div>
            <div className="statShowers"></div>
            <div className="statShowers"></div>
            <div className="statShowers"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
