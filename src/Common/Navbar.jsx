import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Segment } from "semantic-ui-react";
import Footer from "../Common/Footer/Footer";
import "./Navbar.css";
export function Navbar() {
  return (
    <div className="nav-bar-page">
      <Segment inverted color="blue">
        <Link className="company-logo" style={{ color: "white", float: "left"}} to="/">
        Price tracker and Recommendation Tool
        </Link>
        <Link style={{ color: "white", float: "right" }} to="/login">
          Login
        </Link>
        <Link style={{ color: "white", float: "right" }} to="/signup">
          SignUp/
        </Link>
      </Segment>
      <div className="image-dot">
         {/* <img className="image-dot" src="https://cms.bitlab.host/api/data/72/categories/101/background-image.jpg"></img> */}
         </div>
         <Footer/>
    </div>
  );
}
