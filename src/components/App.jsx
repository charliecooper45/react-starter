import React from 'react';
import styled from 'styled-components';
import Menu from './Menu';
import keenImage from '../images/keen.png';

const Wrapper = styled.div`
  text-align: center;
`;

const Title = styled.h1`
  padding: 10px;
  font-size: 1.5em;
  color: palevioletred;
`;

export default () => (
  <Wrapper>
    <Menu />
    <Title>Hello World</Title>
    <img src={keenImage} alt="Commander Keen" />
  </Wrapper>
);
