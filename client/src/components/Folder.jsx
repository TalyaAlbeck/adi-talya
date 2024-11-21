//shows all the folders of user
//API get
import React, { useEffect } from "react";
import { useState } from "react";
const username = localStorage.getItem("currentusername");

export default function Folder() {
  const firstGetUrl = `http://localhost:8080/folder/${username}`;

  const [userData, setUserData] = useState([]);
  const [folderPath, setFolderPath] = useState("");
  const [showBody, setShowBody] = useState(undefined);

  async function getUserData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("there is no folder for this user");
      const data = await res.json();
      console.log(JSON.stringify(data));
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  }

  function openFolder(item, index) {
    setFolderPath((prev) => prev + "/" + item.name);
    if (item.type) {
      showBody === index ? setShowBody(undefined) : setShowBody(index);
    } else {
      const path = `${firstGetUrl}/${folderPath + "/" + item.name}`;
      getUserData(path);
      console.log("folder");
    }
  }

  function goBack() {
    const lastIndex = folderPath.lastIndexOf("/");
    const backUrl = folderPath.slice(0, lastIndex);
    getUserData(firstGetUrl + backUrl);
    const newPath = folderPath.split(`/`).slice(0, -1).join("/");
    setFolderPath(newPath);
  }

  useEffect(() => {
    getUserData(firstGetUrl);
  }, []);

  const filesStyle = {
    backgroundColor: "Pink",
  };
  const folderStyle = {
    backgroundColor: "lightblue",
  };

  //to do: check if the item is folder oe file and treat it diferently
  //we should check in in the server and add another key to the item project- file or folder

  return (
    <>
      <p>there are your folders:</p>
      {userData ? (
        <>
          {userData.map((item, index) => {
            return (
              <>
                <div
                  className="foldersDivs"
                  key={`${item.name}.${index}`}
                  onDoubleClick={() => openFolder(item, index)}
                  style={item.type ? filesStyle : folderStyle}
                >
                  {item.name}
                </div>
                {showBody === index && (
                  <div className="folderBodyDiv">
                    <p>the path is: folders{folderPath}</p>
                    <br />
                    <p>{item.body.toString()}</p>
                    <br />
                    <h4
                      className="closeButton"
                      onClick={() => {
                        setShowBody(undefined);
                        const newPath = folderPath.split(`/${item.name}`)[0];
                        setFolderPath(newPath);
                      }}
                    >
                      x
                    </h4>
                  </div>
                )}
              </>
            );
          })}
          {folderPath.split(`/`).length > 1 && (
            <button onClick={() => goBack()}>back</button>
          )}
        </>
      ) : (
        <h1>there is no information</h1>
      )}
    </>
  );
}
