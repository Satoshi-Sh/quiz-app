import './homepage.css'
import React, { useState, useEffect,useContext } from 'react';
import { ThemeContext } from '../../App';

const baseURL = 'https://the-trivia-api.com/api/'

const Homepage = () => {
   const [categories,setCategories] = useState([])
   const [selectedC,setSelectedC] = useState([])
   const [selectedL,setSelectedL] = useState('')
   
   const list = ['easy','medium','hard']
   const  {dark} = useContext(ThemeContext)
   
   const handleClick = (e)=>{
   if (e.target.style.backgroundColor =='white') {
      e.target.style.backgroundColor ='#23e223'
      setSelectedC([...selectedC,e.target.innerHTML])
   }
   else{
   e.target.style.backgroundColor ='white'
   setSelectedC(selectedC.filter(c=>{
      return c != e.target.innerHTML
   }))
   }
   }
   const chooseLevel = (e) => {
      // turn all white bakcground
      [...e.target.parentElement.children].forEach(button=>
         button.style.backgroundColor='white')

      e.target.style.backgroundColor='#23e223'
      if (e.target.innerText == selectedL) return;
      setSelectedL(e.target.innerHTML) 
   }

   const proceedQuiz = () =>{
      console.log(selectedL)
      console.log(selectedC)

      let catStr = ''
      if (selectedC.length>0){
      for (let i=0; i<selectedC.length; i++){
         catStr += selectedC[i].toLowerCase().replace('&amp;','and').replaceAll(' ','_') +','
      }
      catStr =  'categories=' + catStr.slice(0,-1) +'&'
      }
      let level = ''
      if (selectedL){
         level ='&difficulty=' + selectedL.toLowerCase()
      }
      
      const query = baseURL +'questions?' + catStr + 'limit=10' + level 
      console.log(query)
      fetch(query)
      .then(res=>res.json())
      .then(data => console.log(data))
      .catch(error => console.log(error))
   }
   
   useEffect(()=>{
      fetch(baseURL + 'metadata')
      .then((res)=>res.json())
      .then((data)=>{
         setCategories(Object.keys(data.byCategory))
      }).catch(error=>console.log(error))
   },[])
   function capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
   
   const themeStyle = {
      backgroundColor: dark? 'white':'grey',
      color: dark? 'black': 'white' 
   }

    return (
    <div className='homepage' style={themeStyle}>
       <h1>Choose Categories and Level</h1>
       <h2>Categories</h2>
       <div className='buttons'>
          {categories.map(cat => <button style={{backgroundColor:'white'}} onClick={handleClick} key={cat}>{cat}</button>)}
       </div>
       <h2>Level</h2>
       <div className='levels'>
          {list.map(level => {
          return <button onClick={chooseLevel} key={level} style={{backgroundColor:'white'}}>{capitalizeFirstLetter(level)}</button>
            
         })
          }
       </div>

       <button className='proceed' onClick={proceedQuiz}>Proceed</button>
    </div>
    ) 
  }
  
  export default Homepage;