
import React, {Component} from "react";
//import { Link } from "react-router-dom";//

export default class Navbar extends Component {
render(){

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <a href="/" id="navbar__logo">
          Private Academy
        </a>
        <div className="navbar__toggle" id="mobile-menu">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <a href="/" className="navbar__links" id="home-page">
              Home
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/#viewgradereport"
              className="navbar__links"
              id="viewgradereport-page"
            >
              View Grade Report
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/#viewschedule"
              className="navbar__links"
              id="viewschedule-page"
            >
              View Schedule
            </a>
          </li>
          <li className="navbar__item">
            <a
              href="/#tuitionfee"
              className="navbar__links"
              id="tuitionfee-page"
            >
              View Tuition Fee
            </a>
          </li>
          <li className="navbar__item">
            <a href="/#contactus" className="navbar__links" id="contactus-page">
              Contact Us
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};
};


