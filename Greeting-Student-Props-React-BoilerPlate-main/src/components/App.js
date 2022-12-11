import React from "react";
import "../styles/App.css";
import Welcome from "./welcome";
import { useState } from "react";

const App = () => {

  const [data, getData] = useState("")
  return(
  <div id="input-field">
    <input placeholder="Enter Your Name Here" value={data} onChange={(event)=>getData(event.target.value)}></input>
    <Welcome name={data}/>
  </div>
  )
};

export default App;
