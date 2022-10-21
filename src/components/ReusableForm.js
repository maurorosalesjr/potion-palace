import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Potion Names' />
        <input
          type='text'
          name='type'
          placeholder='Potion Type' />
        <textarea
          name='effect'
          placeholder='Describe the efffects.' />
        <input 
          type='number'
          name='quantity'
          placeholder='How Many?' />
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