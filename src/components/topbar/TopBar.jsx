import { Link, useNavigate } from "react-router-dom";
import "./topbar.css";
import React, { useState, useEffect } from 'react';
import moon from '../../images/moon.png'
import sun from '../../images/sun.png'

export default function TopBar() {
    
    const [dark,setDark] = useState(false)
    function handleClick(){
      setDark(prev=>!prev)
    }
    return (
      <div className="top">
         <div className="topLeft" >
         <h1 className='logo'>Trivia Quiz</h1> 
         </div>
      <div className="topCenter">
        <ul className="topList">
               <Link to='/'>
                 <li className='topListItem'>Home</li>
               </Link>
               <Link to='/about'>
                 <li className='topListItem'>About</li>
               </Link>
        </ul>
      </div>
      <div className="topRight">
        <ul className="topList">
            <img 
            src={dark? sun:moon} className='topImg' onClick={handleClick}/>
        </ul>
      </div>
    </div>
    );
  }