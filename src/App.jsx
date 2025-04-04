import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import {About} from './pages/abouUs';
import{Contact} from './pages/contact';
import { Feedback } from './pages/feedBack';



const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/home" element={"im home page"}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={"Page not found"}/>
        <Route path="/feedback" element={<Feedback/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
