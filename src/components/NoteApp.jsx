import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils";

class NoteApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      notes: getInitialData(),
    }
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
  }

  onAddNoteHandler = ({title, body}) => {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: + new Date(),
            title: title,
            body: body,
            createdAt: showFormattedDate(new Date())
          }
        ]
      }
    }
  )
  }

  render() {
   return (
    <>
      <h1 className=".note-app__body">Note App</h1>
      <NoteInput addNote={this.onAddNoteHandler}/>
      <NoteList />
    </>
  ); 
  }
  
}

export default NoteApp;
