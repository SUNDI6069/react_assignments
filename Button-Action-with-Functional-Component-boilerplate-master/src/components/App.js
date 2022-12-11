import React, {Component, useState} from "react";
import "./../styles/App.css";
import Anything from "./anything";

function App() {

  let data = `Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`
  return (
    <div id="main">
      <Anything info={data}/>
    </div>
  );
}


export default App;
