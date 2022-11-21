import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
      <div className="header">
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>TechSkill Test </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className='nav-link-header'>
              <NavLink   className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""} to='/'>
                Home
              </NavLink>
              <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}  to='/statistics'>    
                Statistics
              </NavLink >
              <NavLink className={({ isActive, isPending }) => isActive ? "active" : isPending ? "pending" : ""}  to='/blog'>
                Blog
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
      </div>
    );
};

export default Header;