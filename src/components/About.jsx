import React, {useState,useEffect} from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiExpress } from "react-icons/si";
import ReactDOM from "react-dom";
import "/src/styles/About.css";

function About({darkMode}){
    return(<div id="about" className={`about ${darkMode ? "dark" : "light"}`}>
        <div><h2>About Myself</h2>
        <p>
          Hi, I’m <b>Sanskruti Kadam</b>, a passionate <b>Full Stack Developer</b>.
          I love building interactive web applications using React.js, Node.js, and SQL. 
          I enjoy solving problems, learning new technologies, and creating projects that make a real impact.
        </p>
        <section>
                <div className="tech-Skills">
                    <h3>Technical Skills</h3>
                    <ul className="skills">
                        <li>Frontend: HTML, CSS, JavaScript, React.js, EJS</li>
                        <li>Backend: Node.js, Express.js, REST APIs, MySQL, PostgreSQL</li>
                        <li>Tools & Platforms: Git, GitHub, VS Code, Postman, npm</li>
                        <li>Other: Problem Solving, Data Structures & Algorithms</li>
                    </ul>
                </div>
        </section></div>
        <div className="tech-icons">
          <FaHtml5 color="#E34F26" />
          <FaCss3Alt color="#1572B6" />
          <FaJs color="#F7DF1E" />
          <FaReact color="#61DAFB" />
          <FaNodeJs color="#339933" />
          <SiExpress color="#000000" />
          <SiMysql color="#4479A1" />
          <SiPostgresql color="#336791" />
          <FaGitAlt color="#F05032" />
        </div>
    </div>);
}

export default About;