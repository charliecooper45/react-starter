import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const NoTextDecoration = {
  textDecoration: 'none',
};
const BoldWhenActive = {
  fontWeight: 'bold'
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
          <NavLink exact to="/" style={NoTextDecoration} activeStyle={BoldWhenActive}>
            <StyledLink>Home</StyledLink>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink to="/image" style={NoTextDecoration} activeStyle={BoldWhenActive}>
            <StyledLink>Image</StyledLink>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
