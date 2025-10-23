import React,{useState,useEffect} from "react";
import "./App.css";

function App() {

  const [darkMode,setDarkMode]=useState(true);

  const [currentPage,setCurrentPage]=useState("home");

  const [displayName,setDisplayName]=useState("");

  const fullName="Sanskruti Kadam.";

  useEffect(()=>{
    let i=0;
    const Interval=setInterval(()=>{
      setDisplayName(fullName.slice(0,i+1));
      i++;
      if(i===fullName.length){
        clearInterval(Interval);
      }
    },300);
  },[]);

  useEffect(()=>{
    document.body.className=darkMode ? "dark" : "light"},[darkMode]);

    const projects = [
        {
          title: "College Club Organization Website",
          tech: "Node.js, Express.js, EJS, SQL",
          desc: [
            "Implemented event registration, member profiles, volunteer sign-up, and certificate generation.",
            "Handled full-stack development, database design, and authentication setup.",
          ],
        },
        {
          title: "Personal Portfolio Website",
          tech: "React.js, JavaScript, CSS",
          desc: [
            "Designed a responsive UI showcasing projects, resume download, and contact form.",
            "Deployed successfully on Netlify.",
          ],
        },
        {
          title: "School Management System",
          tech: "Node.js, Express.js",
          desc: [
            "Developed backend APIs with WebSocket integration for real-time private & group chats.",
            "Implemented secure authentication and messaging features.",
          ],
        },
        {
          title: "Technical Lead – CodeChef Club",
          tech: "Leadership & Mentorship",
          desc: [
            "Led a team of 4 members developing coding challenges and club projects.",
            "Guided juniors in problem-solving, coding best practices, and project implementation.",
          ],
        },
      ];

  return (
    <div id="portfolio">
      <section id="navbar">
        <nav className={`navbar ${darkMode? "dark" : "light"}`}>
          <h2> Portfolio</h2>
          <ul className="nav-links">
            <li><a onClick={()=>setCurrentPage("home")} href="#home">Home</a></li>
            <li><a onClick={()=>setCurrentPage("about")} href="#about">About</a></li>
            <li><a onClick={()=>setCurrentPage("initiatives")} href="#initiatives">Initiatives</a></li>
            <li><a  onClick={()=>setCurrentPage("contact")} href="#contact">Contact</a></li>
            <li><button className="mode" onClick={()=>{setDarkMode(!darkMode)}}>{darkMode ?  "☀️" : "🌙"}</button></li>
          </ul> 
        </nav>
      </section>
      <section id="Home">
        <div id="home" className={`home-container ${darkMode ? "dark" : "light"}`}>
          <div className="home-text">
            <h2 id="name">Hello, I'm <br></br><b>{displayName}</b></h2>
            <p id="desc"> <b>Full Stack Devloper crafting seamless web apps with clean & modern technologies. <br></br>I turn ideas into interactive, user-friendly experiences. </b> </p>
            <button onClick={()=>{window.open("/images/Sanskruti Kadam.pdf","blank")} } className="seeProjectButton">See Resume</button>
          </div>
          <div></div>
        </div>
      </section>
      <section id="Initiatives">
        <div id="initiatives" className={`initiatives ${darkMode ? "dark" : "light"}`}>
          <h2>Projects & Initiatives</h2>
          <section className="project-container">
            {projects.map((p, index) => (
              <div key={index} className="project-box">
                <h3>{p.title}</h3>
                <p className="tech">{p.tech}</p>
                <ul>
                  {p.desc.map((line, i) => (
                    <li key={i}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        </div>
      </section>
      <section id="About">
        <div id="about" className={`about ${darkMode ? "dark" : "light"}`}>
          <div><h2>About Myself</h2>
          <div className="cardAbout">
            <p>
            Hi, I’m <b>Sanskruti Kadam</b>, a passionate <b>Full Stack Developer</b>.
            I love building interactive web applications using React.js, Node.js, and SQL. 
            I enjoy solving problems, learning new technologies, and creating projects that make a real impact.
            <div className="tech-Skills">
                <h3>Technical Skills</h3>
                <ul className="skills">
                  <li>~ Frontend: HTML, CSS, JavaScript, React.js, EJS</li>
                  <li>~ Backend: Node.js, Express.js, REST APIs, MySQL, PostgreSQL</li>
                  <li>~ Tools & Platforms: Git, GitHub, VS Code, Postman, npm</li>
                  <li>~ Other: Problem Solving, Data Structures & Algorithms</li>
                </ul>
              </div>
            </p>
            <img src="/images/Images (3).jpg"></img>
          </div>
          </div>
        </div>
      </section>
      <section id="Contact">
        <div className={`contact ${darkMode ? "dark" : "light"}`}>
          <h2>Connect Me Through</h2>
          <div className="buttons">
            <button
              onClick={() =>
                window.open("https://linkedin.com/in/sanskruti-kadam-9585762ab", "_blank")
              }
              className="linkedIn"
            >
              LinkedIn
            </button>

            <button
              onClick={() => (window.location.href = "mailto:sanskadam7400@gmail.com")}
              className="email"
            >
              E-mail
            </button>

            <button
              onClick={() => window.open("https://wa.me/919876543210", "_blank")}
              className="whatsapp"
            >
              WhatsApp
            </button>

            <button
              onClick={() => window.open("https://github.com/sanskruti7400", "_blank")}
              className="github"
            >
              GitHub
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
