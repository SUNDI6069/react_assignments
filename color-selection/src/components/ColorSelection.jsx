import React, { useEffect, useState } from 'react'
const colourConfig = new Set(['rgb(34, 193, 195)','rgb(221, 112, 18)','rgb(44, 209, 88)'])
const ColorSelection = ({onColorSelected,index}) => {

    const [color,setColor]=useState()
    useEffect(()=>{
        const colorPlate=[...colourConfig.entries()]
        const color =colorPlate.map(e=>e[0])[Math.floor(Math.random()*colorPlate.length)]
        colourConfig.delete(color)
        setColor(color)
    },[])
  return (
    <button  onClick={()=>{onColorSelected(color)}}
    style={{background:color}}>ColorSelection-btn</button>
  )
}

export default ColorSelection