import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
