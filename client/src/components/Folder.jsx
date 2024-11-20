//shows all the folders of user
//API get
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Folder({userData}) {
    const [filderName, setFolderName] = useState('')
    const [showBody, setShowBody] = useState(undefined)
    // const [index, setIndex] = useState()
    console.log(userData);
    function openFolder(item, index) {
        console.log(item);
        setFolderName(item) 
        showBody === index ? setShowBody(undefined) : setShowBody(index)          
    }

    // useEffect(async () => {
    //   const data = await fetch(`http://localhost:3000/folder/`)
    // }, [])
    
  return (
    <>
    <p>the path is: folders // {filderName.name}</p>
    {userData.map((item, index) => {
        return (<>
        <div className='foldersDivs' key={index} onDoubleClick={() => openFolder(item, index)}>{(item.name)}</div>
        {showBody === index && <div className='folderBodyDiv'>{item.body}</div>}
        </>)
    })}
    </>
  )
}
