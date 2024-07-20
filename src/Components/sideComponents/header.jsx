import React from "react";
import Logo from "../images/Logo.png";
import "./header.css";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="logo" onClick={() => navigate("/")}>
          <img className="logoImg" src={Logo} alt="logo" />
        </div>
        <div className="waypoint">
          <div className="covStats" onClick={() => navigate("/covidStats")}>
            <p className="waypointText">COVID STATS</p>
          </div>
          <div className="conStats" onClick={() => navigate("/countryStats")}>
            <p className="waypointText">COUNTRY STATS</p>
          </div>
          <div className="about" onClick={() => navigate("/aboutUs")}>
            <p className="waypointText">ABOUT US</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
