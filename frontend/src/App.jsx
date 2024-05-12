import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Home from './components/Home/Home'
import Appointment from './components/Appointment/Appointment'
import Lab from './components/Lab/Lab'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar></Navbar>
      <Router>
        <Routes>
        <Route path='/about' element={<About />} />
      <Route path='/Appointment' element={<Appointment />} />
      <Route path='/Home' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/Contact' element={<Contact />} />
      <Route path='/Lab' element={<Lab />} />
        </Routes>
      
      </Router>
      

    </>
  )
}

export default App
