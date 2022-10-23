import React from "react";
import Potion from "./Potion";
import PropTypes from "prop-types";




function PotionList(props){
  return (
    <React.Fragment>
      <hr/>
      {props.potionList.map((potion) =>
        <Potion
          whenPotionClicked = { props.onPotionSelection }
          name={potion.name}
          type={potion.type}
          effect={potion.effect}
          quantity={parseInt(potion.quantity)}
          photo={potion.photo}
          id={potion.id}
          key={potion.id}/>
      )}
      </React.Fragment>
  );
}

// Add propTypes for potionList.
PotionList.propTypes = {
  potionList: PropTypes.array,
  onPotionSelection: PropTypes.func
};

export default PotionList;