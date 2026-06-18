import React from "react";
import aboutImg from "../../images/images/about img.png";
import "./about.css"


function About(){
    return(
        <><div className="main-about">
           
            <div className="about-img-sec">
                <img className="about-img" id="home-img" src={aboutImg} alt="mandi img"></img>

            </div><div className="about-content">
             <div className="about-heading">
                <h1>Fueling the future of Agriculture</h1>
            </div>
            <div className="content-para">
                <p1 className="about-para">Atavishaala is an innovative agricultural marketplace built to connect farmers directly with traders, exporters, and food manufacturing companies. Our goal is to make agricultural trade transparent, fair, and efficient by removing unnecessary middlemen and empowering farmers to earn what they truly deserve.
                    <br></br>
We focus on the bulk supply of fruits, vegetables, spices, and rice, ensuring quality produce reaches businesses across India and beyond</p1>
            </div></div>
<div className="about-cardsec">
    <div className="card1-sec">

    </div>
    <div className="card2-sec"></div>
</div>

           

        </div>
     </>
    )
}
export default About;

