import React from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  text-align: left;
`;

// eslint-disable-next-line object-curly-newline
const AddRideForm = ({ ride, changeHandler, submitHandler, error }) => (
  <div className="row col-md-offset-3 col-md-6">
    <h3>Add Ride</h3>
    <StyledForm>
      <FormGroup validationState={error.title !== '' ? 'error' : null}>
        <ControlLabel>{error.title}</ControlLabel>
        <FormControl
          type="text"
          placeholder="Title"
          value={ride.title}
          onChange={changeHandler('title')}
        />
      </FormGroup>
      <FormGroup validationState={error.distance !== '' ? 'error' : null}>
        <ControlLabel>{error.distance}</ControlLabel>
        <FormControl
          type="text"
          placeholder="Distance"
          value={ride.distance}
          onChange={changeHandler('distance')}
        />
      </FormGroup>
      <Button type="submit" onClick={submitHandler}>Submit</Button>
    </StyledForm>
  </div>
);

AddRideForm.propTypes = {
  ride: PropTypes.shape({
    title: PropTypes.string,
    distance: PropTypes.string
  }).isRequired,
  error: PropTypes.shape({
    title: PropTypes.string,
    distance: PropTypes.string
  }).isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  ride: state.ride,
  error: state.rideError
});

export default connect(mapStateToProps)(AddRideForm);
