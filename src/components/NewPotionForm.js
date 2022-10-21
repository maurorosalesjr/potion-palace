import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewPotionForm(props){
  
  function handleNewPotionFormSubmission(event) {
    event.preventDefault();
    props.onNewPotionCreation({
      name: event.target.name.value, 
      type: event.target.type.value, 
      effect: event.target.effect.value, 
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
        <ReusableForm 
        formSubmissionHandler={handleNewPotionFormSubmission}
        buttonText="Help!" />
    </React.Fragment>
  );
}

NewPotionForm.propTypes = {
  onNewPotionCreation: PropTypes.func
};

export default NewPotionForm;