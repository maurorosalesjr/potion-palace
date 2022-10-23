import React from "react";
import PropTypes from "prop-types";

const imgStyle = {
  maxWidth: "150px",
  backgroundColor: "grey",
  display: "block",
}

function PotionDetail(props){
  const { potion, onClickingDelete, onClickingSubtract} = props;

  return (
    <React.Fragment>
      <h1>Potion Detail</h1>
      <img style={imgStyle} src={potion.photo} alt="An image of a potion" />
      <h3>{potion.name}- <em>{potion.type} potion</em></h3>
      <p>{potion.effect}</p>
      <p>{potion.quantity} {potion.name} potions left!</p>
      <button onClick={()=> onClickingSubtract(potion.id) }>Quick Buy!</button>

      <button onClick={ props.onClickingEdit }>Update Potion</button> 
      <button onClick={()=> onClickingDelete(potion.id) }>Close Potion</button> 
      <hr/>
    </React.Fragment>
  );
}

PotionDetail.propTypes = {
  potion: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default PotionDetail;