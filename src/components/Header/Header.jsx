import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const BoldWhenActive = {
  fontWeight: 'bold'
};
const StyledLink = styled.div`
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
        <NavItem componentClass={NavLink} href="/" exact to="/" activeStyle={BoldWhenActive}>
          <StyledLink>Home</StyledLink>
        </NavItem>
        <NavItem componentClass={NavLink} href="/bikes" to="/bikes" activeStyle={BoldWhenActive}>
          <StyledLink>Bikes</StyledLink>
        </NavItem>
        <NavItem componentClass={NavLink} href="/rides" to="/rides" activeStyle={BoldWhenActive}>
          <StyledLink>Rides</StyledLink>
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
