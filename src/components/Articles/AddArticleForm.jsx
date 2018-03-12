import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap';

const AddArticleForm = (props) => {
  let errorBlock;
  if (!props.validForm) {
    errorBlock = <HelpBlock>Please enter a value</HelpBlock>;
  }

  return (
    <form onSubmit={props.submitHandler}>
      <FormGroup validationState={props.validForm ? 'success' : 'error'}>
        <ControlLabel>Add Article</ControlLabel>
        <FormControl type="text" placeholder="Enter article" value={props.value} onChange={props.changeHandler} />
        {errorBlock}
      </FormGroup>
    </form>
  );
};

AddArticleForm.propTypes = {
  validForm: PropTypes.bool.isRequired,
  value: PropTypes.string.isRequired,
  changeHandler: PropTypes.func.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default AddArticleForm;
