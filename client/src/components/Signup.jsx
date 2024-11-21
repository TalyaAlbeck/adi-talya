import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");


  const signHandler = async () => {

    const newUser = {
      username: username,
      password: userPassword,
    };

    //API post newUser
    try {
      console.log("username:", JSON.stringify({ userName: username }))
      const res = await fetch("http://localhost:8080/signup", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser)
      })
      if (res.status === 404) {
        alert("username taken");
        throw Error("this user is alredy exist, pleas choose diferent user name");
      }
      // const data = await res.json();
      // if (data) {
      if (res.ok) {
        localStorage.setItem("currentusername", newUser.username)
        navigate(`/folder/${username}`)
      }
      // navigate(`/folder/${username}`)
      // }

    } catch (err) {
      console.error(err);

    }

    //server check if user is fine

  };

  return (
    <>
      <div id="signup">
        <h1>Sign up:</h1>
        <input placeholder="user name" onChange={(e) => setUserName(e.target.value)} /><br />
        <input placeholder="password" onChange={(e) => setUserPassword(e.target.value)} /><br />

        <button onClick={signHandler}>signup</button>

        <p>have an acount?</p>
        <NavLink to="/login">login</NavLink>
      </div>
    </>
  );
}
