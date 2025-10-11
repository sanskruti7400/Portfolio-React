import React from "react";
import "/src/styles/Initiatives.css";

function Initiatives({ darkMode }) {
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
  );
}

export default Initiatives;
