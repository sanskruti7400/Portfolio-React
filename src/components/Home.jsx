import React , {useState,useEffect} from "react";
import "/src/styles/Home.css";

function Home({darkMode}){
    return(<div id="home" className={`home-container ${darkMode ? "dark" : "light"}`}>
        <div className="home-text">
            <h2 id="name">Hi, I'm <br></br><b>Sanskruti Kadam</b></h2>
            <p id="desc"> <b>Full Stack Devloper</b> </p>
            <button className="seeProjectButton">See Projects</button>
        </div>
        <img src="/src/images/profileHome.jpg"></img>
    </div>);
}


export default Home;