import React from 'react';
import styled from 'styled-components';
import ridley from '../../assets/images/ridley.jpg';
import cannondale from '../../assets/images/cannondale.jpg';

const StyledImg = styled.img`
  max-width:100%;
  max-height:100%
`;

export default () => (
  <div className="row">
    <h1>Bikes</h1>
    <div className="col-md-10 col-md-offset-1">
      <StyledImg src={ridley} alt="Ridley" />
      <StyledImg src={cannondale} alt="Cannondale" />
    </div>
  </div>
);
