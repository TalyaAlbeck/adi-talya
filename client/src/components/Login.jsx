import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login(props) {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  let username = props.username
  let setUsername = props.setUsername

    
  async function loginHandler () {
    //API post user?
    try {
		console.log("username:", JSON.stringify({userName: username}))
		const res = await fetch("http://localhost:8080/login", {
		method: 'POST', 
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({username, password})
    })
		if(!res.ok) throw Error("user or password is incorrect");
		const data = await res.json();
    props.setUserData(data);
    
		if (data){
      navigate(`/folder/${username}`)
    } else {
      console.log("data: ", typeof data);
      
    }
		
    } catch(err) {
        alert(err)
      
    }

    //server check if user is true
    //create currentUser and LS setItem it
    //only if true Navigate to folder!!
    navigate(`/folder/${username}`)

  }

  return (
    <form>
      <h1>log in:</h1>
      <input placeholder="user name" onChange={(e) => props.setUsername(e.target.value)} required minLength={3} maxLength={20}/><br />
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)} required minLength={3} maxLength={20}/><br />

      <button onClick={(e) => {e.preventDefault(); loginHandler()}}>login</button>

      <p>dont have an acount?</p>
      <NavLink to="/signup">signup</NavLink>
    </form>
  )
}



  // const loginHandler = () => {
  //   const rightuser = usersArr.filter(
  //     (item) => item.username === username && item.website === password
  //   );
  //   if (rightuser.length === 0) {
  //     alert("username or password not valid");
  //   } else {
  //     localStorage.setItem("currentUser", JSON.stringify(rightuser[0]));
  //     navigate(`/home/${rightuser[0].id}`);
  //   }
  // };

  