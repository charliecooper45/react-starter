import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import Header from './Header/Header';
import Home from './Home/Home';
import Image from './Image/Image';
import Articles from '../containers/Articles/Articles';

const Wrapper = styled.div`
  text-align: center;
`;

export default () => (
  <Wrapper>
    <Header />
    <div className="container">
      <Jumbotron>
        <Route exact path="/" component={Home} />
        <Route exact path="/image" component={Image} />
        <Route exact path="/articles" component={Articles} />
      </Jumbotron>
    </div>
  </Wrapper>
);
