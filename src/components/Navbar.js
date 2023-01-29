import React from "react";
import "./navbar.css";

const navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <ul>
        <h1>
          REED FILMS & PRODUCTION{" "}
          <link
            rel="manifest"
            href="https://www.rottentomatoes.com/assets/pizza-pie/manifest/manifest.json"
          ></link>{" "}
        </h1>
        <li className="nav-item">
          <a href="#">ABOUT</a>
        </li>
        <li className="nav-item">
          <a href="#">
            <b>Movie LISTs</b>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <b>LATEST PRODUCTIONS</b>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <b>order or buy movies</b>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <b>Event and entertainment</b>
          </a>
        </li>
        <li className="nav-item">
          <a href="#">
            <b>Contact US</b>
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default navbar;
