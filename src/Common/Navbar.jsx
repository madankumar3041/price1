import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import Footer from "../Common/Footer/Footer";
import "./Navbar.css";
export function Navbar() {
  return (
    <div className="nav-bar-page">
      <Segment inverted color="blue">
        <Link
          className="company-logo"
          style={{ color: "white", float: "left" }}
          to="/"
        >
          Price Tracker and Recommendation Tool
        </Link>
        <Link style={{ color: "white", float: "right" }} to="/login">
          Login
        </Link>
        <Link style={{ color: "white", float: "right" }} to="/signup">
          SignUp/
        </Link>
      </Segment>
      <div className="image-dot">
        <div className="para-head">
          Provides competitive pricing on major online
        </div>
        <div className="sub_para">marketplaces</div>
        <div className="para-mid">Strategic price recommendation. Insights to gaps in the online marketplaces</div>
      </div>
      <Footer />
    </div>
  );
}
