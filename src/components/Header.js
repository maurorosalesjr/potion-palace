import React from "react";
import headerImage from "./../img/header.png"

const headerStyle = {
  textAlign: "center",
  textDecoration: "underline",
  textDecorationStyle: "double",
  textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",
  fontFamily: "Cursive",
  border: "5px",
  borderStyle: "solid",
  borderColor: "Burlywood",
  backgroundImage: `url(${headerImage})`,
  color: "darkred",

}

function Header(){
  return (
    <React.Fragment>
    <div style={headerStyle}>
      <h1>Percy's Potion Palace</h1>
      <h2>The Bulk Potion Emporium</h2>
    </div>
    </React.Fragment>
  );
}

export default Header;