import React from "react"
import "./card.css"

function Card(props){
    return(<><div className="super-main">
    <div className="image-sec">
        <img className="card-img" src={props.image} alt={props.imagename} loading="lazy"></img>
    </div>
    <div className="main-container">
        <div className="upper-container">
        <h1>{props.number}</h1>
        </div>
        <div className="bottom-card">
        <h2>{props.title}</h2>
        <p>{props.description}</p></div>
    </div>
</div>
    </>)
}

export default Card
