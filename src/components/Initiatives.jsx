import React ,{useState,useEffect} from "react";
import ReactDOM from "react-dom";
import "/src/styles/Initiatives.css";

function Initiatives({darkMode}){
    return(<div id="initiatives" className={`initiatives ${darkMode ? "dark" : "light"}`}>
       <div> <h2>Projects</h2>
       <p> <b>🔹 College Club Organization Website </b>(Node.js, Express.js, EJS, SQL)<br></br>
        - Implemented event registration, member profiles, volunteer sign-up, and certificate generation.<br></br>
        - Responsible for full-stack development, database design, and authentication setup.<br></br>
        </p> <br></br>
        <p><b>🔹 Personal Portfolio Website</b> (React.js, JavaScript, CSS)<br></br>
       - Designed a responsive UI showcasing projects, resume download, and contact form.<br></br>
        - Deployed successfully on Netlify.
        </p><br></br>
        <p><b>🔹 School Management System</b> (Node.js, Express.js)<br></br>
        - Developed backend APIs with WebSocket integration for real-time private & group chats.<br></br>
        - Implemented secure authentication and messaging features.<br></br>
        </p></div>
        <div><h2>Technical Lead: CodeChef Club</h2>
        <p>
           <br></br>  ➤ Led a team of 4 members for developing coding challenges and club projects.<br></br>
            ➤ Guided juniors in problem-solving, coding best practices, and project implementation.
        </p></div>
    </div>);
}

export default Initiatives;