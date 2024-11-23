import React, { useState } from "react";

export default function EditFile({
  bodyContent,
  setBodyContent,
  path,
  username,
}) {
  const [shoeEditInput, setShoeEditInput] = useState(false);

  function handleEdit() {
    console.log("edit!");
    setShoeEditInput(shoeEditInput ? false : true);

    saveNewContent();
  }

  async function saveNewContent() {
    try {
      const res = await fetch(
        `http://localhost:8080/folder/${username}${path}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username,
            path,
            bodyContent,
          }),
        }
      );
      if (res.status === 404) {
        alert("there was some problem, the file wasnt saved");
        throw Error("error while saving the file");
      }
      if (res.ok) {
        console.log("the file saved!");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <button className="editButton" onClick={handleEdit}>
        editFile
      </button>
      <br />
      {shoeEditInput && (
        <>
          <input
            className="editInput"
            onChange={(e) => {
              e.preventDefault();
              setBodyContent(e.target.value);
            }}
            value={bodyContent}
          />
          {/* <br />
          <button className="saveContentButton" onClick={postNewContent}>
            save
          </button> */}
        </>
      )}
    </>
  );
}
