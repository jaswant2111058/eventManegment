import "./card.css"
import {FaStar} from "react-icons/fa"

const Cards =({cardDetails})=>{



    return(
        <>

        <div className="cardMain">
            <div className="cardImages-wrapper">
                <img className="card-images" src={cardDetails?.imgUrl?cardDetails.imgUrl:"./images/card-1.jpg"} alt="coming"/>
            </div>
            <div className="rating-votes">
            
            <div className="rating">
            <FaStar/> {cardDetails?.rating?cardDetails.rating:"4.5/5"}
            </div>
            <div className="votes">
                {cardDetails?.votes?cardDetails.votes:"4.5"} k Votes
            </div>
            </div>
            <div className="show-name">
                {cardDetails?.name?cardDetails.name:"Mera Naam Ballu"}
            </div>
            <div className="show-type">
                {cardDetails?.type?cardDetails.type: "Comedy/Drama"}
            </div>

        </div>
       
        </>
    )
}

export default Cards;