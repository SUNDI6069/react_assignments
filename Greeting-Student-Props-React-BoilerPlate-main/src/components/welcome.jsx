// write code for Welcome component here
import React from "react";
import { useState } from "react";
const Welcome = (props) => {
  const [name, setname] = useState("");
  const display = () => {
    return setname(props.name); // Why return?
  };
  return (
    <span>
      <div id="button"><button onClick={display}>Login</button></div>
      {name.length !== 0 && <div>
      <h1>Hey {name}!</h1>
      <h2>Welcome to 10x Academy</h2>
      </div>}
      
    </span>
  );
};
export default Welcome;

