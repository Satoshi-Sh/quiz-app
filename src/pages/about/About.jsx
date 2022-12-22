import './about.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';

const About = () => {
   const [categories,setCategories] = useState({})
   const [states,setStates] = useState({})
   const [difficulties,setDifficulties] = useState({})
   const list = ['easy','medium','hard']
   const state_list = ['pending','approved','rejected']
   const  {dark} = useContext(ThemeContext)

   useEffect(()=>{
      fetch('https://the-trivia-api.com/api/metadata')
      .then((res)=>res.json())
      .then((data)=>{
         setCategories(data.byCategory)
         setStates(data.byState)
         setDifficulties(data.byDifficulty)
      } 
         )
      .catch(error=>console.log(error))
   },[])
   function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

   
   
   const themeStyle = {
      backgroundColor: !dark? 'white':'grey',
      color: !dark? 'black': 'white' 
   }
    return (
    <div className='about' style={themeStyle}>
       <h1 className='header'>About</h1>
       <p>This application used <a href="https://the-trivia-api.com/" target='_blank' id='link'>The Trivia API</a> to get quizzes.</p>
       <h2 className='header'>Categories</h2>
       <div className='categories'>
          {Object.keys(categories).map(key =>
          <div className='card' key={key}>
            <div className='category'>{key}</div>
            <div className='num'> {categories[key] +" quizzes"}</div>
          </div>)}
       </div>
       <h2 className='header'>Difficulties</h2>
       <div className='difficulties'>
          {list.map(key =>{
            if(key=='null') return;

          return (<div className='card' key={key}>
            <div className='category'>{capitalizeFirstLetter(key)}</div>
            <div className='num'> {difficulties[key] +" quizzes"}</div>
          </div>)}
          )}
          
       </div>
       <h2 className='header'>States</h2>
       <div className='states'>
          {state_list.map(key =>{
          return (<div className='card' key={key}>
            <div className='category'>{capitalizeFirstLetter(key)}</div>
            <div className='num'> {states[key] +" quizzes"}</div>
          </div>)}
          )}
          
       </div>
    </div>
    ) 
  }
  
  export default About;