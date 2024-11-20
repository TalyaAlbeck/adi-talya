import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Login from './components/Login'
import Signup from './components/Signup';
import Folders from './components/Folder'
import File from './components/File';

function App() {
  const [username, setUsername] = useState("");

  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login username={username} setUsername={setUsername}/>}/>
        <Route path="/Signup" element={<Signup />}/>
        <Route path="/folder" element={<Folders username={username} setUsername={setUsername}/>}>
          {/* <Route path="/folder/file" element={<File />}/> */}
        </Route>
        <Route path="*" element={<h1>404 not found</h1>} />
      </Routes>
    </Router>
      
    </>
  )
}

export default App
