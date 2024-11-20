import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function File(props) {
    //fetch files
    useEffect(() => {
        async function getFile() {
            console.log('props: ', props);
            try {
                const res = await fetch(`http://localhost:8080/file/${(props.username)}`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' },
                    // body: JSON.stringify(props.username)
                })
                if (!res.ok) throw Error("404 file not found");
                const data = await res.json();
                console.log((data));

            } catch (err) {
                alert(err)
            }
        }
        
        getFile();
    }, [])

    return <>
        {/* //show title of file
    //get title from parent Folder */}


    </>
}