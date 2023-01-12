import React, { Component } from "react";
import "./index.css";
import { Navbar, NavbarBrand, Nav, Collapse, NavItem } from "reactstrap";
import NavLink from "react-router-dom/NavLink";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <>
        <Navbar expand="lg header-top bg-white">
          <div className="container">
            <button
              onClick={this.toggleNav}
              className="mr-2 toggle-button navbar-toggler"
            >
              <span className="fa fa-solid fa-bars"></span>
            </button>
            <NavbarBrand className="mr-auto navbar-logo" href="/home">
              <b>Charts Mania</b>
            </NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="offset-2">
              <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg mt-2"> Home</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/bar">
                    <span className="fa fa-home fa-lg mt-2"> Bar Chart</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/line">
                    <span className="fa fa-list fa-lg mt-2"> Line Chart</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/pie">
                    <span className="fa fa-address-card fa-lg mt-2"> Pie Chart</span>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/donut">
                    <span className="fa fa-address-card fa-lg mt-2"> Donut Chart</span>
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
            
          </div>
        </Navbar>
      </>
    );
  }
}

export default Header;