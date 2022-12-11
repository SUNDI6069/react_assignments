import { useState } from "react";
import React from "react";

const Anything = (props) =>{
    const [info, setInfo] = useState("");
    const display = ()=>{
        setInfo(props.info)
    }

    return(
        <div className="parent">
            <p id="para">{info}</p>
            <button id="click" onClick={display}>Click me!</button>
        </div>
    )
}

export default Anything;