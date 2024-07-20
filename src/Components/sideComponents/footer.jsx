import React from "react";
import "./footer.css";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="icons">
          <div className="iconHolder">
            <InstagramIcon />
            <FacebookIcon />
            <XIcon />
          </div>
        </div>
        <p>© Covid 19 Corporation</p>
      </div>
    </>
  );
}

export default Footer;
