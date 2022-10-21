import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditPotionForm (props) {
  const { potion } = props;

  function handleEditPotionFormSubmission(event) {
    event.preventDefault();
    props.onEditPotion({name: event.target.name.value, type: event.target.type.value, effect: event.target.effect.value, quantity: event.target.quantity.value, photo: event.target.photo.value, id: potion.id});
  }
  return (
    <React.Fragment>
      <ReusableForm formSubmissionHandler={handleEditPotionFormSubmission}
        buttonText="Update Potion" />
    </React.Fragment>
  );
}

EditPotionForm.propTypes = {
  potion: PropTypes.object,
  onEditPotion: PropTypes.func
};

export default EditPotionForm;