import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      notes: getInitialData().map(note => {
        return {...note, createdAt: showFormattedDate(new Date(note.createdAt))}
      }),
    }
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this)
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this)
  }

  onAddNoteHandler = ({title, body}) => {
    const newNote = {
      id: + new Date(),
      title: title,
      body: body,
      createdAt: showFormattedDate(new Date()),
    }
    this.setState(prevState => ({
      notes: [...prevState.notes, newNote],
    }))
  }

  onDeleteNoteHandler = (id) => {
    this.setState(prevState => {
      const newNotes = prevState.notes.filter((note) => note.id !== id);
      return { notes: newNotes }
    });
  }

  render() {
   return (
    <div className="note-app__body">
      <NoteAppHeader />
      <h2 className="note-app__body">Buat Catatan</h2>
      <NoteInput addNote={this.onAddNoteHandler}/>
      <NoteList 
      notes={this.state.notes} 
      onDelete={this.onDeleteNoteHandler}/>
    </div>
  ); 
  }
  
}

export default NoteApp;
