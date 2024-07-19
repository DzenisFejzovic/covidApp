import React from "react";
import Logo from "../images/Logo.png";
import "./header.css";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <NavLink to="/">
            <img src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div className="waypoint">
          <div className="covStats">
            <NavLink to="/covidStats">
              <p>COVID STATS</p>
            </NavLink>
          </div>
          <div className="conStats">
            <NavLink to="/countryStats">
              <p>COUNTRY STATS</p>
            </NavLink>
          </div>
          <div className="about">
            <NavLink to="/aboutUs">
              <p>ABOUT US</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
