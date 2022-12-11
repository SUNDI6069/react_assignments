import React, { useState } from "react";
import '../styles/App.css';
import ColorPeaker from "./ColorPeaker";



const title = 'Select the gradient and then the Box to change the color';

const App = () => {
  return (
    <div id='master'>
      <h1 className="heading">{title}</h1>
      <ColorPeaker/>
    </div>
  )
}


export default App;
