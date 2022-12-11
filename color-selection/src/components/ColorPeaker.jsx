import React, { useState } from 'react'
import Selection from './Selection'
import ColorSelection from './ColorSelection'
import '../styles/App.css';
const ColorPeaker = () => {
  const [nextBackground,setNextBackground]=useState('')
  function onColorSelected(color){
    // console.log(`hii ${color}`)
    setNextBackground(color)
  }
  function applycolor(){
    return nextBackground
  }
  return (
    <div className='main-container'>
            
    <div className='holder'>
      <ColorSelection  onColorSelected={onColorSelected}/>
      <ColorSelection onColorSelected={onColorSelected}/>
      <ColorSelection onColorSelected={onColorSelected}/>
    </div>
    <div className='holder'>
      <Selection index={1} applycolor={applycolor}/>
      <Selection index={2} applycolor={applycolor}/>
      <Selection index={3} applycolor={applycolor}/>
    </div>
    </div>
  )
}

export default ColorPeaker