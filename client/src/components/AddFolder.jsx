import React from "react";

export default function AddFolder({ path, username }) {
  async function addFolderButton() {
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
            body: JSON.stringify({ folderName, username, path }),
          }
        );
        if (res.status === 404) {
          alert("there was some problem, the file wasnt saved");
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
    <button style={{ backgroundColor: "lightBlue" }} onClick={addFolderButton}>
      AddFolder
    </button>
  );
}
