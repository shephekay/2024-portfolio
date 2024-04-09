import './App.scss';
import About from './pages/About'
import Art from './pages/Art'
import Software from './pages/Software'
import React from "react";
import { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import NavBar from './components/Navbar';

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sheila Phedra Kelley</h1>
        <NavBar/>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
      </header>
      
    </div>
  );
}

export default App;
