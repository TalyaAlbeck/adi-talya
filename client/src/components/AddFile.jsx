import React from "react";
import { LuFilePlus2 } from "react-icons/lu";

export default function AddFile({ path, username }) {
  async function addFileHandler() {
    console.log("file added!");
    console.log(path);
    try {
      const fileName = prompt();
      const folderBody = prompt();
      if (fileName) {
        console.log("fileName: ", fileName);

        const res = await fetch(
          `http://localhost:8080/folder/${username}${path}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              fileName,
              username,
              path,
              folderBody,
              isFile: true,
            }),
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
    <div className="addFileButton" onClick={addFileHandler}>
      <LuFilePlus2 size={35} />
    </div>
  );
}
