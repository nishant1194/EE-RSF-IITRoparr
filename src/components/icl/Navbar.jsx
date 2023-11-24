import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo.jpeg";
import './Navbarr.css'

function Navbar() {
  return (
    <div>
      {/* editti÷ */}
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
      >
        <div className="container-xl">
          <img className="logoo"
            src={Logo}
            alt=""
            style={{ height: "40px", width: "40px", marginRight: "20px" }}
          />
          <Link
            className="navbar-brand"
            style={{ margin: "0px 49px 0px 0px " }}
            to="/"
          >
            Research Scholar Forum
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

          <div className="collapse navbar-collapse" id="navbarsExample07XL">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle active"
                  to="/"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Events
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="/workshops">
                      Workshop
                    </Link>
                    <Link className="dropdown-item" to="/talk-series">
                      Invited Talk Series
                    </Link>
                  </li>
                  <li></li>
                </ul>
              </li>
              <li className="nav-item" style={{ marginLeft: "3px" }}>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/researchday"
                >
                  EE-RSF Research Day
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/team">
                  Team
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contact">
                  Contact Us
                </Link>
              </li>

              <li className="nav-item" style={{ marginLeft: "3px" }}>
                <Link className="nav-link active" to="/gallary">
                  Gallary
                </Link>
              </li>
            </ul>
            <form role="search">
              <input
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
