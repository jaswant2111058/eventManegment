import "./home.css"
import Navbar from "../navbar/nav"
import Carousel from "../carousel/carousel"
import Cards from "../cards/card"
import About from "../about/about"

const Home =()=>{

    const cardDetails=[{

        imgUrl:"./images/card-2.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"

    },{
        imgUrl:"./images/card-3.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
    },
{
    imgUrl:"./images/card-4.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
},{
    imgUrl:"./images/card-5.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
}]
    const movies=[{

        imgUrl:"./images/card-1.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"

    },
    {
        imgUrl:"./images/card-6.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
    },
    {
        imgUrl:"./images/card-9.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
    },
    {
        imgUrl:"./images/card-10.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
    },
{
    imgUrl:"./images/card-7.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
},{
    imgUrl:"./images/card-8.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
}]
    const comedy=[{

        imgUrl:"./images/card-5.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"

    },{
        imgUrl:"./images/card-3.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
    },
{
    imgUrl:"./images/card-4.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
},{
    imgUrl:"./images/card-5.jpg",
        rating:"1.3/5",
        voting:"2.5",
        name:"JAWAN",
        type:"Action/Drama/Thrill"
}]

        return(

            <>
            <Navbar/>
            <Carousel/>
            <div className="card-main">
            <div className="recents-cards">
                <h1>
                    Recent On Going
                </h1>
                <div className="avaliable-cards">
                <Cards cardDetails={cardDetails[0]}/>
                <Cards cardDetails={cardDetails[1]}/>
                <Cards cardDetails={cardDetails[4]}/>
                <Cards cardDetails={cardDetails[2]}/>
                <Cards cardDetails={cardDetails[3]}/>
                <Cards cardDetails={cardDetails[4]}/>
                </div>

            </div>
            <div className="recents-cards">
                <h1>
                    TRENDING MOVIES
                </h1>
                <div className="avaliable-cards">
                <Cards cardDetails={movies[3]}/>
                <Cards cardDetails={movies[1]}/>
                <Cards cardDetails={movies[5]}/>
                <Cards cardDetails={movies[2]}/>
                <Cards cardDetails={movies[0]}/>
                <Cards cardDetails={movies[4]}/>
                </div>

            </div>
            <div className="recents-cards">
                <h1>
                    Laughter Therapy
                </h1>
                <div className="avaliable-cards">
                <Cards cardDetails={comedy[0]}/>
                <Cards cardDetails={comedy[1]}/>
                <Cards cardDetails={comedy[1]}/>
                <Cards cardDetails={comedy[2]}/>
                <Cards cardDetails={comedy[3]}/>
                <Cards cardDetails={comedy[4]}/>
                </div>
            </div>
            </div>
            <About/>
            </>
        )



}

export default Home;