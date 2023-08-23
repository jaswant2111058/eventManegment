
import "./carousel.css"
import { useState,useEffect } from "react";

const Carousel=()=>{
    
    const[num, setNum]=useState(0);
      function transisition(value){
        document.getElementById("images").scrollLeft = (window.innerWidth/1.28)*value;
        document.getElementById("0").checked=false;
        document.getElementById("1").checked=false;
        document.getElementById("2").checked=false;
        document.getElementById("3").checked=false;
        document.getElementById("4").checked=false;
        document.getElementById(`${value}`).checked=true
        value = (value+1)%5
        setNum(value)
      }
      useEffect(() => {
        const interval = setInterval(() => {
            transisition(num)
            console.log(num)
      }, 2000);
      return () => clearInterval(interval);
      });

   
    
    return(
        <>
        <div className="carousel">
        <div className="images" id="images">
            {/* <img className={images2[num[1]]} src={images[num[0]]}/>
            <img className={images2[num[2]]} src={images[num[1]]}/>
            <img className={images2[num[3]]} src={images[num[2]]}/>
            <img className={images2[num[4]]}src={images[num[3]]}/>
            <img className={images2[num[0]]}src={images[num[4]]}/> */}
            <img className="first" src="./images/jack.png"/>
            <img className="sec" src="./images/jack.png"/>
            <img className="third" src="./images/jack.png"/>
            <img className="forth"src="./images/jack.png"/>
            <img className="fifth"src="./images/jack.png"/>
        </div>

        <div className="radiobtn">
            <input type="radio" id="0"/>
            <input type="radio" id="1"/>
            <input type="radio" id="2"/>
            <input type="radio" id="3"/>
            <input type="radio" id="4"/>
        </div>
    </div>
        
        </>
    )



}

export default Carousel;