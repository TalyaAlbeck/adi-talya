import React from "react";

export default function DeleteFile() {
  async function handleDelete() {
    console.log("delete!");
  }
  return (
    <button className="deleteButton" onClick={handleDelete}>
      Delete
    </button>
  );
}
