import React from "react";
import PropTypes from "prop-types";

function PotionDetail(props){
  const { potion, onClickingDelete } = props;

  return (
    <React.Fragment>
      <h1>Potion Detail</h1>
      <h3>{potion.name}- <em>{potion.type} potion</em></h3>
      
      <p>{potion.effect}</p>
      <p>{potion.quantity} {potion.name} potions left!</p>
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