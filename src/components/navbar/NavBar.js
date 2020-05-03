import React from "react";
import classes from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, Form, Button, ButtonGroup } from "react-bootstrap";
import logo from "../../resource/rice-university_logo.png";

const NavBar = (props) => {
  return (
    <Navbar expand="lg" className={classes.NavBar}>
      <Navbar.Brand className={classes.logo}>
        <Link to="/">
          <img src={logo} width="50" height="50" className="d-inline-block" />
          {"   "}
          Rice VIP Flood Sensor Research Team
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <ButtonGroup>
          <Button variant="light">
            <Link to="/about" className="classes.link">
              About
            </Link>
          </Button>
          <Button variant="light">
            <Link to="/demo" className="classes.link">
              Demo
            </Link>
          </Button>
          <Button variant="light">
            <Link to="/team" className="classes.link">
              Team
            </Link>
          </Button>
        </ButtonGroup>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
