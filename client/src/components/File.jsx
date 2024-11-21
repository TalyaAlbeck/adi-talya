import React, { useEffect, useState } from "react";
import { FaRegFolderOpen } from "react-icons/fa6";
import { FaRegFile } from "react-icons/fa";

const username = localStorage.getItem("currentusername");

export default function File() {
  const firstGetUrl = `http://localhost:8080/folder/${username}`;

  const [userData, setUserData] = useState([]);
  const [folderPath, setFolderPath] = useState("");
  const [showBody, setShowBody] = useState(undefined);

  async function getUserData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("there is no folder for this user");
      const data = await res.json();
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

  return (
    <>
      <div className="folderContent">
        {userData ? (
          <>
            {userData.map((item, index) => {
              return (
                <div key={index} className="folderIcon">
                  <div
                    className="foldersDivs"
                    onDoubleClick={() => openFolder(item, index)}
                  >
                    {item.type ? <FaRegFile /> : <FaRegFolderOpen />}
                    <br />
                    <p>{item.name}</p>
                  </div>
                  {showBody === index && (
                    <div className="folderBodyDiv">
                      <p>Path: folders{folderPath}</p>
                      <p>{item.body}</p>
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
                </div>
              );
            })}
            {folderPath.split(`/`).length > 1 && (
              <button onClick={goBack}>Back</button>
            )}
          </>
        ) : (
          <h1>No information available</h1>
        )}
      </div>
    </>
  );
}
