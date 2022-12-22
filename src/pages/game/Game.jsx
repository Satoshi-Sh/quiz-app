import './game.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';
import {useNavigate,useLocation} from 'react-router-dom';


const Game = () => {

   const  {dark} = useContext(ThemeContext)
   
   const themeStyle = {
      backgroundColor: dark? 'white':'grey',
      color: dark? 'black': 'white' 
   }
   const navigate = useNavigate()
   const location = useLocation()
   const quizzes = location.state.data
   const [trial,setTrial] = useState(0)
   const [correct, setCorrect] = useState(0)

   function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
   function handleClick(e){
      let noAction = false;
      ([...e.target.parentElement.children]).forEach(button=>
         {if (button.style.backgroundColor!='white'){
            noAction =true;
         };
      })
      if (!noAction){
      if (e.target.id=='correct'){
         e.target.style.backgroundColor='#23e223'
         setTrial(prev=>prev+1)
         setCorrect(prev=>prev+1)
         if (trial==9){
            navigate('/score',{state:{correct:correct+1}})
         }
      }
      else {
         e.target.style.backgroundColor='pink';
         // show correct answer
         ([...e.target.parentElement.children]).forEach(button=>{
            if (button.id=='correct')
            {button.style.backgroundColor='#23e223'}
         })
         setTrial(prev=>prev+1)
         if (trial==9){
            navigate('/score',{state:{correct}})
         }
      }
      }
   }

    return (
    <div className='game' style={themeStyle}>
       {quizzes.map((quiz,i) =>
       { 
         return (<div className='card' key={i}>
         <div className='head'><span className='q'>{'Q' + (i+1).toString()}</span>{quiz.question}</div>
         <div className='meta'>{quiz.category + ': ' + capitalizeFirstLetter(quiz.difficulty)} </div>
         <div className='buttons'>
            {quiz.answers.map(ans =>{
            let id='wrong'
            if (ans==quiz.correctAnswer){
            id='correct'
            }   
            return (   
            <button key={ans} id={id} className='ansButton' style={{backgroundColor:'white'}} onClick={handleClick}>{ans}</button>)})}
         </div>
       </div>)}
       )}
    </div>
    )
  }
  
  export default Game;