import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';
import Folder from './components/Folder';

function App() {
  const [userData, setUserData] = useState([])

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserData={setUserData}/>}/>
        <Route path="/login" element={<Login setUserData={setUserData}/>}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/folder/:userName" element={<Folder userData={userData}/>}/>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
