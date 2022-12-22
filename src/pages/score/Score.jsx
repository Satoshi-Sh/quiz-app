import './score.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';
import {useNavigate,useLocation} from 'react-router-dom';

const Score = () => {
   const  {dark} = useContext(ThemeContext)
   const themeStyle = {
      backgroundColor: !dark? 'white':'grey',
      color: !dark? 'black': 'white' 
   }
   const location = useLocation()
   const score = location.state.correct *10

    return (
   
    <div className='score' style={themeStyle}>
       <h1>Score</h1>
       <h2>{score} %</h2>
    </div>
    ) 
  }
  
  export default Score;