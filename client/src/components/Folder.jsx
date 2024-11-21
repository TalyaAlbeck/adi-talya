//shows all the folders of user
//API get
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Folder() {
    const [userData, setUserData] = useState(null)
    const [filderName, setFolderName] = useState('')
    const [showBody, setShowBody] = useState(undefined)
    const username = localStorage.getItem("currentusername")
    console.log('username: ', username);
    function openFolder(item, index) {
        setFolderName(item) 
        showBody === index ? setShowBody(undefined) : setShowBody(index);        
    }

    useEffect(() => {
		async function getUserData() {
			
			try {
				const res = await fetch(`http://localhost:8080/folder/${username}`);
				if (!res.ok) throw Error("there is no folder for this user")
					const data = await res.json();
					console.log(JSON.stringify(data));
					const Udata = await setUserData(data)
			} catch(err) {
				console.log(err);
				
			}
		}
		getUserData()
    }, [])

    const filesStyle = {
      backgroundColor: "Pink"
    }
    const folderStyle = {
      backgroundColor: "lightblue"
    }

    //to do: check if the item is folder oe file and treat it diferently
    //we should check in in the server and add another key to the item project- file or folder
    
  return (
    <>
    <p>there are your folders:</p>
    {userData ? userData.map((item, index) => {
      return (<>
        <div className='foldersDivs' key={`${item.name}.${index}`} onDoubleClick={() => openFolder(item, index)} style={item.type ? filesStyle : folderStyle}>{(item.name)}</div>
        {showBody === index && 
        <div className='folderBodyDiv'>
        <p>the path is: folders // {filderName.name}</p><br />  
        <p>{item.body}</p><br /> 
		<h4 className='closeButton'
		onClick={() => setShowBody(undefined)}>x</h4>
    </div>}
        </>)
    }) : <h1>there is no information</h1>}
    </>
  )
}
