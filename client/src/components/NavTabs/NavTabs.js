import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          Home
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/profile"
          className={window.location.pathname === "/profile" ? "nav-link active" : "nav-link"}
        >
          profile
        </Link>
      </li>
      <li className="nav-item">
        <Link
          to="/chatIndex"
          className={window.location.pathname === "/chatIndex" ? "nav-link active" : "nav-link"}
        >
          Chat Index
        </Link>
      </li>
      <li className="nav-item">
      </li>
    </ul>
  );
}

export default NavTabs;