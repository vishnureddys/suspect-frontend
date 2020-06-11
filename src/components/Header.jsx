import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import blrlogo1 from "../blrlogo.png";
import blrlogo2 from "../blrlogo2.png";
export default class Header extends Component {
  render() {
    return (
      <div>
        <ReactBootStrap.Navbar bg="info" expand="lg">
          <ReactBootStrap.Navbar.Brand href="#home">
            <img src={blrlogo1} style={{ width: "100px" }}></img>
            <img src={blrlogo2} style={{ width: "200px" }}></img>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="basic-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="basic-navbar-nav">
            <ReactBootStrap.Nav className="mr-auto">
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
              <ReactBootStrap.Nav.Link href="http://127.0.0.1:8000/contact/">
                Contact Us
            </ReactBootStrap.Nav.Link>
              <ReactBootStrap.NavDropdown
                title="Dropdown"
                id="basic-nav-dropdown"
              >
                <ReactBootStrap.NavDropdown.Item href="http://127.0.0.1:8000/login/">
                  Login
              </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="http://127.0.0.1:8000/register/">
                  Sign Up
              </ReactBootStrap.NavDropdown.Item>
                <ReactBootStrap.NavDropdown.Item href="https://www.bcp.gov.in/">
                  More Information
              </ReactBootStrap.NavDropdown.Item>
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Navbar >
      </div >
    );
  }
}
