import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Well } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StyledWell = styled(Well)`
  &:hover {
    border: 2px solid red;
  }
`;

const RidesList = props => props.rides.map(ride => (
  <StyledWell onClick={() => props.clickHandler(ride.id)} key={ride.id}>
    {ride.title} | {ride.distance} km
  </StyledWell>));

RidesList.propTypes = {
  rides: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    distance: PropTypes.string
  })).isRequired,
  clickHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  rides: state.rides
});

export default connect(mapStateToProps)(RidesList);
