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

function Navbar(){
  return (
  <nav className='navigation-rail'>
    <Link to="/" className='nav-item' role="tab" >About</Link>
    <Link to='/software' className='nav-item' role="tab">Software</Link>
    <Link to='/art' className='nav-item' role="tab">Art</Link>
  </nav>
  )
}

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sheila Phedra Kelley</h1>
      </header>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/software' element={<Software/>} />
          <Route path='/art' element={<Art/>}/>
          <Route exact path='/' element={<About/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
