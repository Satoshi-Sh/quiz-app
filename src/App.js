import './App.css';
import TopBar from './components/topbar/TopBar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Homepage from './pages/homepage/Homepage'
import About from './pages/about/About'
import NoPage from './pages/nopage/NoPage'

function App() {
  return (
    <div className="App">
    <Router basename='quiz-app'>
      <TopBar />
      <div className='content'>
      <Routes>
        <Route exaxt path='/' element = {<Homepage />}/>
        <Route path ='/about' element = {<About />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
      </div>

    </Router>
    </div>
  );
}

export default App;
