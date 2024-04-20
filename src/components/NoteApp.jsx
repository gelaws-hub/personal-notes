import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteApp() {
  return (
    <>
      <h1 className=".note-app__body">Note App</h1>
      <NoteInput />
      <NoteList />
    </>
  );
}

export default NoteApp;
