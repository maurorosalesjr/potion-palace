import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Potion Name' />
          <br></br>
        <input
          type='text'
          name='type'
          placeholder='Potion Type' />
          <br></br>
        <textarea
          name='effect'
          placeholder='Describe the efffects.' />
          <br></br>
        <input 
          type='number'
          name='quantity'
          placeholder='A barrel is 60 Potions' /> 
          <br></br>
          <input 
            type='file'
            name='photo'
            placeholder='add a photo'
          />
          <br></br>
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;