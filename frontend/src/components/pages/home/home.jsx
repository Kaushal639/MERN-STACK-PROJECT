import Button from "../../buttons/button.jsx";
import Bigcontainer from "../../container/big-container/big-container.jsx"
import Card from "../../cards/card.jsx"
import Midcontainer from "../../container/mid-container/mid-container.jsx";
import "./home.css"

function Home(){

    return(
        <><div className="header-main">
            <div className="left-side">
             <div className="heading">
                <h2>From Soil to Scalable Global Supply Chain</h2>
             </div>
             <div className="paragraph">
                <p1>Empowering farmers, enabling businesses, and digitizing agricultural trade through a transparent and reliable supply network</p1>
             </div>
             <div className="button1">
                <Button name="Partener with Us"></Button>
             </div>
            </div>
            <div className="right-side">
                <div className="imagesection">
                    <img id="home-img"src="https://media.istockphoto.com/id/108313157/photo/india-farming.jpg?s=2048x2048&w=is&k=20&c=jc5gIXNLKt-OJg7BE3T5ZbSC9TE7HiqgJ-YTMhqQK44=" alt="kisan ..img"></img>
                    
                </div>
            </div>
        </div>
 
        </>
    )
}
export default Home;

