import React from "react";
import Header from "./Header";
import PotionControl from "./PotionControl";

const basicStyle = {
  marginLeft: "5%",
  marginRight: "5%",
  backgroundColor: "grey",
  
}
function App(){
  return (
    <React.Fragment>
      <Header />
      <div style={basicStyle}>
        <PotionControl />
      </div>
    </React.Fragment>
  );
}

export default App;
