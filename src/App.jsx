import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import '/src/styles/App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import "/src/styles/index.css";
import "/src/styles/Navbar.css";

function App() {
  return (<div>
    <Navbar />
    <Home />
</div>
  );
}

export default App;
