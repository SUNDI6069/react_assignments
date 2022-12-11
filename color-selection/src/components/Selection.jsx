import React, { useState } from 'react'
import '../styles/Child.css'

const Selection = ({index,applycolor}) => {
    const[bgcolor,setBgColor]=useState({background:''})
  return (
    <div  className='fix-box' onClick={()=>{
        const color=applycolor()
        setBgColor({
            background:color
        })
    }} style={bgcolor}>
        <h1 id='section' >Selection</h1>
        {/* <h1 >Selection{index}</h1> */}
    </div>
        
  )
}

export default Selection