import React from "react";
import CovidMap from "./images/CovidMap.png";
import { useLocation, useNavigate } from "react-router-dom";
import "./home.css";
function Home() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <div>
        {location.pathname === "/" && (
          <div className="container">
            <div className="map">
              <img src={CovidMap} alt="" />
            </div>

            <div className="worldStats">
              <p className="worldStatsText">World stats</p>

              <div className="worldStatsDivHolder">
                <div className="statShower">
                  <div>
                    <p className="statShowerText">Recovered:</p>
                    <p className="recoveredText"> 1911806582 </p>
                  </div>
                </div>
                <div className="statShower">
                  <div>
                    <p className="statShowerText">Deaths:</p>
                    <p className="deathsText"> 21032028 </p>
                  </div>
                </div>
                <div className="statShower">
                  <div>
                    <p className="statShowerText">Active Cases:</p>
                    <p className="casesText"> 50362509 </p>
                  </div>
                </div>
                <div className="statShower">
                  <p
                    className="countryStatsStatButton"
                    onClick={() => navigate("/countryStats")}
                  >
                    Country Stats
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
