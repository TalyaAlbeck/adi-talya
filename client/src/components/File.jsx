import React, { useEffect, useState } from "react";

const username = localStorage.getItem("currentusername");

export default function Folder() {
  const firstGetUrl = `http://localhost:8080/folder/${username}`;
  const [userData, setUserData] = useState([]);
  const [folderPath, setFolderPath] = useState("");
  const [showBody, setShowBody] = useState(null);

  async function getUserData(url) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw Error("There is no folder for this user");
      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.log(err);
    }
  }

  function openFolder(item, index) {
    const newPath = `${folderPath}/${item.name}`;
    setFolderPath(newPath);

    if (item.type) {
      setShowBody(showBody === index ? null : index);
    } else {
      const path = `${firstGetUrl}${newPath}`;
      getUserData(path);
    }
  }

  function goBack() {
    const lastIndex = folderPath.lastIndexOf("/");

    if (lastIndex > 0) {
      const backUrl = folderPath.slice(0, lastIndex);
      getUserData(`${firstGetUrl}${backUrl ? "/" + backUrl : ""}`)
        .then(() => {
          setFolderPath(backUrl);
        })
        .catch(() => {
          alert("The folder does not exist!");
        });
    } else {
      setFolderPath("");
      getUserData(firstGetUrl);
    }
  }

  function closeFile() {
    setShowBody(null);
    const newPath = folderPath.split("/").slice(0, -1).join("/");
    setFolderPath(newPath);
  }

  useEffect(() => {
    getUserData(firstGetUrl);
  }, []);

  return (
    <>
      <p>Here are your folders:</p>
      {userData ? (
        <>
          {/* תיקיות */}
          <div className="folders-section">
            <h3>Folders</h3>
            <div className="folders">
              {userData
                .filter((item) => !item.type)
                .map((item, index) => (
                  <div
                    className="folderDiv"
                    key={`${item.name}.${index}`}
                    onDoubleClick={() => openFolder(item, index)}
                  >
                    <img src="folder-icon.png" alt="Folder" />
                    <p>{item.name}</p>
                  </div>
                ))}
            </div>
          </div>

          <div className="files-section">
            <h3>Files</h3>
            {userData
              .filter((item) => item.type)
              .map((item, index) => (
                <div
                  className="fileDiv"
                  key={`${item.name}.${index}`}
                  onDoubleClick={() => openFolder(item, index)}
                >
                  <img src="file-icon.png" alt="File" />
                  <p>{item.name}</p>
                </div>
              ))}
          </div>

          {folderPath.split(`/`).length > 1 && (
            <button onClick={goBack} className="backButton">
              Back
            </button>
          )}
        </>
      ) : (
        <h1>No information available</h1>
      )}

      {showBody !== null && (
        <div className="folderBodyDiv">
          <p>The path is: folders{folderPath}</p>
          <p>{userData[showBody].body}</p>
          <h4 className="closeButton" onClick={closeFile}>
            x
          </h4>
        </div>
      )}
    </>
  );
}
