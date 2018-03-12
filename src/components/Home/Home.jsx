import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Title = styled.h1`
  padding: 10px;
  font-size: 1.5em;
  color: palevioletred;
`;

export default () => (
  <div>
    <Title>Home Page</Title>
    <Link to="/image">Image</Link>
  </div>
);
