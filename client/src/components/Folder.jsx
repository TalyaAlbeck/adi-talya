//shows all the folders of user
//API get
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import File from "./File";

export default function Folder(props) {
    return (
        <>
        <h1>hhhh</h1>
        <File username = {props.username}/>
        </>
    )
}