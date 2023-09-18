import "./nav.css"
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import { useData } from "../context/DataContext";
import  {FaBars,FaTimes, FaSearch} from "react-icons/fa";



const Navbar=()=>{

    const { isLoading, startLoading, stopLoading,setQuery } = useData();

    const navigate = useNavigate();
    const handleChangen=(e)=>{
        setQuery(e.target.value)
    }

return(
    <>
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
            <img src="./images/BOlogo.jpg"/>
        </div>
        <div className="search_bar">
        <input className="search_place"
        onChange={handleChangen}
        />
        <FaSearch/>
        </div>
    </div>
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
    </>
)



}


export default Navbar;