import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/bikes" component={Bikes} />
          <Route path="/rides" component={Rides} />
          <Route render={() => <h1>404 Not Found</h1>} />
        </Switch>
      </Jumbotron>
    </div>
  </Wrapper>
);
