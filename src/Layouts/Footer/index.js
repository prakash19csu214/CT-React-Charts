import React from "react";
import './index.css'
import { NavbarBrand, Nav } from "reactstrap";

function Footer() {
  return (
    <>
    <div className="footer">
      <div className="container p-5">
        <div className="row justify-content-center">
          <div className="">
            <NavbarBrand className="mr-auto navbar-logo" href="/home">
              <b>Charts Mania</b>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <form class="form-inline my-2 my-lg-0">
                <input
                  class="form-control mr-sm-2"
                  type="email"
                  placeholder="Email Address"
                  aria-label="email"
                />
                <button
                  class="btn btn-outline-success my-2 my-sm-0"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            </Nav>
            <div className="mt-4 contact">
            <h5>Contact Info-:</h5>
            <address>
            17 Princess Road, London, 
            <br />
             Greater London NW1 8JR, UK
            </address>
            </div>
          </div>
          <div className="col-4 col-sm-2 offset-1 footer-links">
            <p> <b> Catagories </b></p>
            <ul className="list-unstyled">
              <li>
                <a href="/bar">Bar Style</a>
              </li>
              <li>
                <a href="/line">Line Style</a>
              </li>
              <li>
                <a href="/pie">Pie Style</a>
              </li>
              <li>
                <a href="/donut">Donut Style</a>
              </li>
            </ul>
          </div>
          <div className="col-4 col-sm-2 footer-links">
            <p> <b> Customer Care </b></p>
            <ul className="list-unstyled">
              <li>
                <a to="/home">My Account</a>
              </li>
              <li>
                <a to="/aboutus">Contact Us</a>
              </li>
              <li>
                <a to="/home">Account Setting</a>
              </li>
              <li>
                <a to="/aboutus">Help Desk</a>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    </div>
    <div className="footer-btm">
    <div className="container">
    <div className="row align-items-bottom">
          <div className="col-12 col-sm-6 justify-content-center d-flex">
            <p>©Webecy - All Rights Reserved</p>
          </div>
          <div className="col-12 col-sm-6">
            <div className="text-center">
            
              <a
                className="btn btn-social-icon btn-facebook"
                href="http://www.facebook.com/profile.php?id="
              >
                <i className="fa fa-facebook"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="http://www.linkedin.com/in/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="http://twitter.com/"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
          </div>
        </div>
    </div>
    </>
  );
}

export default Footer;