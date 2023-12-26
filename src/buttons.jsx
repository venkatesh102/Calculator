import React from "react";
import CurrentOutPut from "./Currentoutput";
function Buttons(props)
{
    
    return <button onClick={(ele,index)=>{

    props.HandleCommanButton(props.text);
    
    
    }}>{props.text}</button>
}
export default Buttons;