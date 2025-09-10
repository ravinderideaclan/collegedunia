import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/homepage'
import ExploreColleges from './pages/explorecolleges'



    

function App() {
  return (
    <>

    <Navbar /> 
      <Routes>        
        <Route path="/" element={<Homepage />} />
        <Route path="/explorecolleges" element={<ExploreColleges />} />
      </Routes>





    </>
  )
}

export default App
