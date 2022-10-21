import React from "react";
import PropTypes from "prop-types";

function Potion(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPotionClicked(props.id)}>
      <img src={props.photo} alt="An image of a potion" />
      <p><em>{props.name}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Potion.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  effect: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  photo: PropTypes.string,
  id: PropTypes.string, 
  whenPotionClicked: PropTypes.func 
};

export default Potion;