import React from "react";
import { VscNewFolder } from "react-icons/vsc";

export default function AddFolder({ path, username }) {
  async function addFolderHandler() {
    console.log("added!");
    console.log(path);
    try {
      const folderName = prompt();
      if (folderName) {
        console.log("folderName: ", folderName);

        const res = await fetch(
          `http://localhost:8080/folder/${username}${path}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ folderName, username, path, isFile: false }),
          }
        );
        if (res.status === 404) {
          alert("there was some problem, the folder wasnt saved");
          throw Error("error while saving the file");
        }
        if (res.ok) {
          console.log("the folder saved!");
        }
      }
      //   const data = await res.json();
    } catch (err) {
      console.error(err);
      console.log(err);
    }
  }

  return (
    <div className="addFolderButton" onClick={addFolderHandler}>
      <VscNewFolder size={35} />
    </div>
  );
}
