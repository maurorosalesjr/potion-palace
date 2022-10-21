import React from "react";
import PropTypes from "prop-types";

function Potion(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPotionClicked(props.id)}>
      <h3>{props.name}</h3>
      <p><em>{props.type}</em></p>
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
  id: PropTypes.string, 
  whenPotionClicked: PropTypes.func 
};

export default Potion;