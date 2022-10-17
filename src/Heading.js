import React from "react";
import Logo from "./logo.png";

const Heading = () => {
  return (
    <div className="Heading">
      <img className="Logo" src={Logo} alt="This is the logo" />
      <header className="App-header">CYF Hotel</header>
    </div>
  );
};

export default Heading;
