import React from "react";
import Buttons from "./buttons";
import buttonarr from "./buttonarr";
function Button(props)
{
  
    return <div className="buttons">
    {buttonarr.map((ele)=>{
        return <Buttons text={ele} HandleCommanButton={props.HandleCommanButton1}/>
    })}
    </div>
}

export default Button;