import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/">
            <img className="header-logo" src={logo} alt="logo" />
          </Link>
          <div className="header-right">
            {location.pathname !== "/" ? (
              <Link to="/">
                <h5>Home</h5>
              </Link>
            ) : null}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
