import Card from "../../cards/card"
import whatsapp from "../../images/images/whatsapp.jpg"

import instagram from "../../images/images/instagram1.jpg"
import linkedin from "../../images/images/linkedin1.jpg"

import github from "../../images/images/github1.jpg"
import "./contact.css";

import { Link } from "react-router-dom";
function Contact(){
    return(
        <>
       <div id="contact-main">
        <div id="contact-heading">
            <h1>Our Support Always With You</h1>
        </div>
        <div className="contact-cards">
        <Card image={whatsapp} number="1"  title={<><Link to="https://wa.me/919045669297?text=Hello">whatsapp</Link></>}></Card>
          <Card image={instagram} number="2"  title={<><Link to="https://www.instagram.com/ankityaduvanshiy">instagram</Link></>}></Card>
            <Card image={linkedin} number="3"  title={<><Link to="https://www.linkedin.com/in/kaushal-7b3565323/">linked-in</Link></>}></Card>
            
             <Card image={github} number="4"  title={<><Link to="https://github.com/Kaushal639">github</Link></>}></Card>
      </div> </div>

        </>


    )
}
export default Contact;

