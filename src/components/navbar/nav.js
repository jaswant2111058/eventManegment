import "./nav.css"
import { useNavigate } from "react-router-dom";
import { useData } from "../context/DataContext";
import  {FaBars,FaTimes, FaSearch} from "react-icons/fa";



const Navbar=()=>{

    const { setQuery, results} = useData();
    const navigate = useNavigate();
    const handleChangen=(e)=>{
        setQuery(e.target.value)
    }

    const findItem =(id)=>{



    }
  
   

    let search_results =""

    if(results.length){
        search_results = results.map(( items)=>{
            return(
                <div className="searchResult" key={items._id} onClick={()=>findItem(items.eventId)}>
                    <div>
                    {items.name}
                    </div>
                    <div>
                    {items.city}
                    </div>
                </div>
            )
        })
    }





return(
    <>
    <div className="nav-main">
    <div className="nav2">
        <div className="left">
            <p>Movies</p>
            <p>Streams</p>
            <p>Events</p>
            <p>Plays</p>
            <p>Sports</p>
        </div>
        <div className="right">
            <p>List Show</p>
            <p>See Events Clashes</p>
            <p>Find Places</p>
        </div>

    </div>
     <div  className="navOption" id="navOption">
          <div className="innernav">
            <FaTimes
             onClick={()=>{
                document.getElementById("navOption").style.width="0px"
            }} />
            </div>  
            <p>hiiii</p>    
    </div>
        
    <div className="navbar">
        <div className="leftside">
            <div className="btn1">
            <FaBars onClick={()=>{
                document.getElementById("navOption").style.width="300px"
            }}/>
            </div>
            <div className="btn2">
            <p onClick={()=>{navigate("/login")}}> LOGIN</p>
            </div>      
        </div>
        <div className="logo">
          <img src="./images/logo2.jpg" alt=""/>
        </div>
        <div className="search_bar">
        <input className="search_place"
        placeholder="Search..."
        onChange={handleChangen}
        >     
        </input>
        <FaSearch/>
        <div className="search_result">
            {search_results}
        </div>

        </div>
    </div>
    </div>
    </>
)



}


export default Navbar;