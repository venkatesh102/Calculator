import React from "react";
import PrevOutput from "./prevoutput";
import CurrentOutPut from "./Currentoutput";
import Button from "./button";
function Output()
{ 
    const [expression,setexpressionstate]=React.useState("");
     const [prevexpressio,setpreviousexpressionstate]=React.useState("");
    function HandleCommanButton(ele)
    {
        console.log(expression);
        setexpressionstate((previousExpression)=>{
             return HandleButton(ele,previousExpression)
        }
        );
        // <CurrentOutPut expression1={expression} />;

    }
    function HandleButton(ele,previousExpression)
    {
        if(ele==="CE"){
            if(previousExpression>0){
            return setexpressionstate(previousExpression.slice(0,-1));
            }
        }
        else if(ele==="="){
            try{
            if(previousExpression!=="" &&previousExpression!==null){
                const expressionAnsw=eval(previousExpression)?.toString();
           
            if(!isNaN(expressionAnsw)&&isFinite(expressionAnsw)){
            setpreviousexpressionstate(previousExpression);
                return expressionAnsw;
            }
            else{
                return "";
            }
        }
    }catch(error){
        setexpressionstate("");
            return error.toString();
        }
            // }
        
        }
        else{
         return previousExpression+ele;
        }
    }
    return <div className="output">
        <PrevOutput prev={prevexpressio}/>
        <CurrentOutPut expression1={expression}/>
        <Button HandleCommanButton1={HandleCommanButton}/>
    </div>
}

export default Output;