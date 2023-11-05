import "./home.css"
import Navbar from "../navbar/nav"
import Carousel from "../carousel/carousel"
import Cards from "../cards/card"
import About from "../about/about"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"



const Home = () => {

    const [loadData, setLoadData] = useState()
  
    useEffect(() => {

        async function loadCards() {
            try {
                const res = await axios.get("https://eventbookingserver.onrender.com/eventList")
                if (res) {
                    setLoadData(res.data)
                }
                else {
                    console.error(res)
                }
            }

            catch (err) {
                console.log(err)
            }
        }

        loadCards();

    }, [])


    const loader =() => {

        return(
            <>
                <div className="loader-main">
                    <div className="loader-inner">
                      <img src="./images/loading-gif.gif" alt=""/>
                    </div>
                </div>

            </>
        )
   
    }


    return (

        <>
            <Navbar />
            <Carousel />
            {loadData?"":loader()}
            <div className="card-main">
                <div className="recents-cards">
                    <h1>
                        Recent On Going
                    </h1>
                    <div className="avaliable-cards">
                        {
                            loadData?.recentOnGoing.map((item) => {
                                return (
                                    <Cards _id={item._id} imgUrl={item.img[0]} name={item.name} key={item._id} />
                                )
                            })
                        }
                    </div>

                </div>
                <div className="recents-cards">
                    <h1>
                        TRENDING MOVIES
                    </h1>
                    <div className="avaliable-cards">
                        {
                            loadData?.trendingMovie.map((item) => {
                                return (
                                    <Cards _id={item._id} imgUrl={item.img[0]} name={item.name} key={item._id} />
                                )
                            })
                        }
                    </div>

                </div>
                <div className="recents-cards">
                    <h1>
                        Laughter Therapy
                    </h1>
                    <div className="avaliable-cards">
                        {
                            loadData?.laughterTherepy.map((item) => {
                                return (
                                    <Cards _id={item._id} imgUrl={item.img[0]} name={item.name} key={item._id} />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <About />
        </>
    )



}

export default Home;