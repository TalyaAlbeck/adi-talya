//shows all the folders of user
//API get
import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Folder({userData}) {
    const [filderName, setFolderName] = useState('')
    // const [index, setIndex] = useState()
    console.log(userData);
    function openFolder(item) {
        console.log(item);
        setFolderName(item)
        
        
    }
    
  return (
    <>
    <p>the path is: folders // {filderName.name}</p>
    {userData.map((item, index) => {
        return <div className='foldersDivs' key={index} onDoubleClick={() => openFolder(item)}>{(item.name)}</div>
    })}
    </>
  )
}
