import './App.css';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from 'react';

import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import NoPage from './pages/nopage/NoPage'

export const ThemeContext = React.createContext()

function App() {
  const {render,dark} = TopBar()

  return (
    <div className="App">
    
    <Router basename='quiz-app'>
      {render}
      <div className='content'>
      <ThemeContext.Provider value={{dark}}>
      <Routes>
        <Route exaxt path='/' element = {<Homepage />}/>
        <Route path ='/about' element = {<About />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      </ThemeContext.Provider>
      </div>

    </Router>
    </div>
  );
}

export default App;
