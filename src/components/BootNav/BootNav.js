// Tutorial https://www.youtube.com/watch?v=-FZzPHSLauc

import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";  
import 'bootstrap/dist/css/bootstrap.css';
import './BootNav.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../login-button";
import LogoutButton from "../logout-button";
import React from 'react';

 


const BootNav = () => {
    
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <h1 className="navbar-brand">Anthea's House of Burgers</h1>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button"    data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>


          <li className="nav-item">
          <Link to="/new"><Button className="btn btn-dark">Build a Burger!</Button></Link>
          </li>
  
        
        </ul>
  
      </div>
      </div>
    </nav>  
  );
}

const AuthNav = () => null;

const NavBar = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container>
        {/* <Navbar.Brand as={RouterNavLink} className="logo" to="/" /> */}
        <BootNav />
        <AuthNav />
      </Container>
    </Navbar>
  );
};



export default NavBar;