import React from "react";
import "./button.css"

function Button(props){


    return(<>
    <div className="mainbutton">
    
    <h1>{props.name}</h1>
    </div>
    </>)
}
export default Button;