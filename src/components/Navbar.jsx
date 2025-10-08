import React ,{useState} from "react";
import ReactDOM from "react-dom";
import "/src/styles/Navbar.css";

function Navbar(){

    const [darkMode,setDarkMode]=useState(true);

    return(<nav className={`navbar ${darkMode? "dark" : "light"}`}>
        <h2>Portfolio</h2>
        <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#initiatives">Initiatives</a></li>
            <li><a href="#resume">Resume</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><button className="mode" onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ? "🌙" : "☀️"}</button></li>
        </ul>
    </nav>);
}

export default Navbar;