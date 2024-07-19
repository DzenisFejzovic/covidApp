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
          <InstagramIcon />
          <FacebookIcon />
          <XIcon />
        </div>
        <p>Copyright 2022. All Rights Reserved</p>
      </div>
    </>
  );
}

export default Footer;
