import React from 'react';
import styled from 'styled-components';
import { Route } from 'react-router-dom';
import { Jumbotron } from 'react-bootstrap';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Bikes from './components/Bikes/Bikes';
import Rides from './containers/Rides/Rides';

const Wrapper = styled.div`
  text-align: center;
`;

export default () => (
  <Wrapper>
    <Header />
    <div className="container">
      <Jumbotron>
        <Route exact path="/" component={Home} />
        <Route exact path="/bikes" component={Bikes} />
        <Route exact path="/rides" component={Rides} />
      </Jumbotron>
    </div>
  </Wrapper>
);
