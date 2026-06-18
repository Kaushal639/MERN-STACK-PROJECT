import React from "react";
import "./small-container.css"

function SmallContainer(props){

    return(
        <>
        <div className="small-main">
            <h1>{props.title}</h1>
            <p>{props.description}</p>

        </div>
        </>
    )
}
export default SmallContainer;

