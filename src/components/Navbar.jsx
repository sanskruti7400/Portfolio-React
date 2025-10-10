import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "/src/styles/Navbar.css";

function Navbar({darkMode,setDarkMode,setCurrentPage}){
    return(<nav className={`navbar ${darkMode? "dark" : "light"}`}>
        <h2> Portfolio</h2>
        <ul className="nav-links">
            <li><a onClick={()=>setCurrentPage("home")} href="#home">Home</a></li>
            <li><a onClick={()=>setCurrentPage("about")} href="#about">About</a></li>
            <li><a href="#initiatives">Initiatives</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="mode" onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ? "🌙" : "☀️"}</button></li>
        </ul>
    </nav>);
}

export default Navbar;