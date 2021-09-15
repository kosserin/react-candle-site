import React, {useState,useEffect} from "react";

function Carousel({slides}) {

    const [toggle, setToggle] = useState(false);
    let [index, setIndex] = useState(0);

    useEffect(() =>{
        console.log(index)
    })

    const handlePrevButton = () => {
        if(index<=0){
            setIndex(3)
        } else{
            setIndex(index-1);
        }
    }

    const handleNextButton = () => {
        if(index>=3){
            setIndex(0)
        } else{
            setIndex(index+1);
        }
    }

    return(
        <section id="carousel" className="third-section">
            <h1>What others said about us</h1>
            <div className="slides">
            <div className="slide">
                <img src={slides[index].image} alt="" />
                <h2>{slides[index].name}</h2>
                <p>{slides[index].text}</p>
            </div>
            <i onClick={handlePrevButton} className="fas fa-arrow-left"></i>
            <i onClick={handleNextButton} className="fas fa-arrow-right"></i>
            </div>
        </section>
    )
}

export default Carousel;