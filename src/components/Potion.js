import React from "react";
import PropTypes from "prop-types";

const imgStyle = {
  maxWidth: "150px",
  backgroundColor: "grey",
  display: "block",
}

function Potion(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenPotionClicked(props.id)}>
        <img style={imgStyle} src={props.photo} alt="An image of a potion" />
        <p><em>{props.name}</em></p>
        <p>{props.effect}</p>
        <p>{props.quantity} potions remaining</p>
      </div>
        <button onClick={()=> props.whenSaleClicked(props.id) }>Quick Buy!</button>
        <button onClick={()=> props.whenBulkClicked(props.id) }>Quick Buy a Barrel(60 potions)!</button>
        <hr/>

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
  whenPotionClicked: PropTypes.func, 
  whenSaleClicked: PropTypes.func
};

export default Potion;