import React from 'react';
import { Button, FormGroup, ControlLabel, FormControl } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  text-align: left;
`;

// eslint-disable-next-line object-curly-newline
const AddRideForm = ({ formErrors, ride, changeHandler, submitHandler }) => (
  <div className="row col-md-offset-3 col-md-6">
    <h3>Add Ride</h3>
    <StyledForm>
      <FormGroup validationState={formErrors.title !== '' ? 'error' : null}>
        <ControlLabel>{formErrors.title}</ControlLabel>
        <FormControl
          type="text"
          placeholder="Title"
          value={ride.title}
          onChange={changeHandler('title')}
        />
      </FormGroup>
      <FormGroup validationState={formErrors.distance !== '' ? 'error' : null}>
        <ControlLabel>{formErrors.distance}</ControlLabel>
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
  formErrors: PropTypes.shape({
    title: PropTypes.string,
    distance: PropTypes.string
  }).isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default AddRideForm;
