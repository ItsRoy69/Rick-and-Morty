import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/">
            <img className="header-logo" src={logo} alt="logo" />
          </Link>
          <div className="header-right">
            <input
              className="header-input"
              type="text"
              placeholder="Search"
              id="episodes-search-input"
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
