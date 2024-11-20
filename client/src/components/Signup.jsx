import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [username, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const navigate = useNavigate();


  const signHandler = async () => {

    const newUser = {
      username: username,
      password: userPassword,
    };
    
    //API post newUser
   //server check if user is fine
  
    
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/folder");

  };
  
  return (
    <>
      <div id="signup">
        <h1>Sign up:</h1>
        <input placeholder="user name" onChange={(e) => setUserName(e.target.value)} /><br />
        <input placeholder="password" onChange={(e) => setUserPassword(e.target.value)} /><br />

        <button onClick={signHandler}>signup</button>

        <p>have an acount?</p>
        <NavLink to="/">login</NavLink>
      </div>
    </>
  );
}
