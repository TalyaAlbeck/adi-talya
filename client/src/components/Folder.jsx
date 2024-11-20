//shows all the folders of user
//API get
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Folder({username}) {
    const [userData, setUserData] = useState(null)
    const [filderName, setFolderName] = useState('')
    const [showBody, setShowBody] = useState(undefined)
	
    function openFolder(item, index) {
        setFolderName(item) 
        showBody === index ? setShowBody(undefined) : setShowBody(index)          
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
    
  return (
    <>
    <p>the path is: folders // {filderName.name}</p>
    {userData ? userData.map((item, index) => {
        return (<>
        <div className='foldersDivs' key={index} onDoubleClick={() => openFolder(item, index)}>{(item.name)}</div>
        {showBody === index && <div className='folderBodyDiv'>{item.body}<br /> 
		<button className='closeButton'
		onClick={() => setShowBody(undefined)}>close</button></div>}
        </>)
    }) : <h1>there is no information</h1>}
    </>
  )
}
