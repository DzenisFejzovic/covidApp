import React from "react";
import Logo from "../images/Logo.png";
import "./header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>

        <div className="waypoint">
          <div className="covStats">
            <p>COVID STATS</p>
          </div>
          <div className="conStats">
            <p>COUNTRY STATS</p>
          </div>
          <div className="about">
            <p>ABOUT US</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
