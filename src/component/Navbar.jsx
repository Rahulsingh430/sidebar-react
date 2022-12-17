import React from "react";
import "../App.css";
import Logo from "../assets/react.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h3>CYC</h3>
      <img src={Logo} />
    </div>
  );
};

export default Navbar;
