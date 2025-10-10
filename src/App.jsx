import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import "/src/styles/index.css";
import "/src/styles/Navbar.css";
import Initiatives from './components/Initiatives'

function App() {

 const [darkMode,setDarkMode]=useState(true);

 const [currentPage,setCurrentPage]=useState("home");

 useEffect(()=>{
  document.body.className=darkMode ? "dark" : "light"},[darkMode]);

  return (<div>
    <Navbar darkMode={darkMode} setDarkMode={setDarkMode} setCurrentPage={setCurrentPage} />
    {currentPage==="home" && <Home darkMode={darkMode} />}
    {currentPage==="about" && <About darkMode={darkMode} />}
    {currentPage==="initiatives" && <Initiatives darkMode={darkMode} />}
    {currentPage==="contact" && <Contact darkMode={darkMode} />}
</div>
  );
}

export default App;
