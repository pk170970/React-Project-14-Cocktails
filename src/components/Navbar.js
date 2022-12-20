import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <NavLink to="/">
          <img
            className="logo"
            src="https://react-projects-15-cocktails.netlify.app/static/media/logo.9a3d2645.svg"
            alt="logo"
          />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
