import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState([]);
    
  function loginHandler () {
    console.log("hhhh")
  }

  return (
    <form>
      <h1>log in:</h1>
      <input placeholder="user name" onChange={(e) => setUsername(e.target.value)} /><br />
      <input placeholder="password" onChange={(e) => setPassword(e.target.value)} /><br />

      <button onClick={loginHandler}>login</button>

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

  