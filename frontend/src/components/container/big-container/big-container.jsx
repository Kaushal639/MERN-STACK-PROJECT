import "./big-container.css";

function Bigcontainer(props){

    return(
        <>
        <div className="mainbigcontainer">
            <div className="upper-card">
            <h2 className="heading-big">{props.heading}</h2>
            <p className="para-big">{props.paragraph}</p>
            </div>
            <div className="bottom-main">
                {props.children}
            </div>
        
        </div>

        
        </>
    )
}

export default Bigcontainer;