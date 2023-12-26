import React from "react";
function CurrentOutPut(props)
{
    console.log("onclick")
    return <div className="currentoutput">
    <h1>{props.expression1}</h1>
    </div>
}
export default CurrentOutPut;