import React, {useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "/src/styles/About.css";

function About({darkMode}){
    return(<div id="about" className={`about ${darkMode ? "dark" : "light"}`}>
        <div><h2>About Myself</h2>
        <p> Hi, I’m <b>Sanskruti Kadam,</b><br></br> a passionate <b>Full Stack Developer</b> with a love for creating dynamic and user-friendly web applications. I’m a Computer Science student who enjoys solving complex problems and turning ideas into functional, interactive software. 

I specialize in both frontend and backend development, and I love exploring new technologies like AI/ML, React.js, Node.js, and database management. My goal is to build projects that combine creativity, design, and logic to provide real-world solutions.

When I’m not coding, I enjoy learning about emerging technologies, contributing to open-source projects, and improving my problem-solving skills through algorithm challenges.
</p></div>
        <div className="tech-Skills">
            <h3>Technical Skills</h3>
            <ul className="skills">
                <li>Frontend: HTML, CSS, JavaScript, React.js, EJS</li>
                <li>Backend: Node.js, Express.js, REST APIs, MySQL, PostgreSQL</li>
                <li>Tools & Platforms: Git, GitHub, VS Code, Postman, npm</li>
                <li>Other: Problem Solving, Data Structures & Algorithms</li>
            </ul>
        </div>
    </div>);
}

export default About;