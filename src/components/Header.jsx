import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NoTextDecoration = {
  textDecoration: 'none',
};
const StyledLink = styled.a`
  color: #9d9d9d;
  
  &:hover {
    color: #fff;
    text-decoration: none;
  }
`;

export default () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">React Starter</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem>
          <NavLink to="/" style={NoTextDecoration}>
            <StyledLink>Home</StyledLink>
          </NavLink>
        </NavItem>
        <NavItem>
          <Link to="/image" style={NoTextDecoration} >
            <StyledLink>Image</StyledLink>
          </Link>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
