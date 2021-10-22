import React from "react";
import logo from "../logo.png";
import "../styles/Logo.css";

function Logo() {
  return (
    <div>
      <img className="logo" src={logo} alt="Logo" />
    </div>
  );
}

export default Logo;
