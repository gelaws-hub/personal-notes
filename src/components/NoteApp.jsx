import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getInitialData, showFormattedDate } from "../utils";
import NoteAppHeader from "./NoteAppHeader";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: getInitialData().map((note) => {
        return {
          ...note,
          createdAt: showFormattedDate(new Date(note.createdAt)),
        };
      }),
      searchTitle: "",
    };
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onDeleteNoteHandler = this.onDeleteNoteHandler.bind(this);
    this.onArchiveNoteHandler = this.onArchiveNoteHandler.bind(this);
    this.moveArchiveNoteHandler = this.moveArchiveNoteHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler = ({ title, body }) => {
    const newNote = {
      id: +new Date(),
      title: title,
      body: body,
      createdAt: showFormattedDate(new Date()),
      archived: false,
    };
    this.setState((prevState) => ({
      notes: [...prevState.notes, newNote],
    }));
  };

  onDeleteNoteHandler = (id) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.filter((note) => note.id !== id);
      return { notes: newNotes };
    });
  };

  onArchiveNoteHandler = (id) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: true };
        } else {
          return note;
        }
      });
      return { notes: newNotes };
    });
  };

  moveArchiveNoteHandler = (id) => {
    this.setState((prevState) => {
      const newNotes = prevState.notes.map((note) => {
        if (note.id === id) {
          return { ...note, archived: false };
        } else {
          return note;
        }
      });
      return { notes: newNotes };
    });
  };

  onSearchHandler = (event) => {
    const searchTitle = event.trim().toLowerCase();
    this.setState({ searchTitle });
  };

  render() {
    const { searchTitle, notes } = this.state;
    const searchedNotes = searchTitle
      ? notes.filter((note) => note.title.toLowerCase().includes(searchTitle))
      : notes;

    console.log(notes)
    const hasArchived = notes.some((note) => note.archived);

    return (
      <>
        <NoteAppHeader onSearch={this.onSearchHandler} />
        <div className="note-app__body">
          <NoteInput addNote={this.onAddNoteHandler} />

          {/* Active Items */}
          <h2 className="note-app__body">Active Notes</h2>
          {notes.length !== 0 ? (
            <NoteList
              notes={searchedNotes.filter((note) => !note.archived)}
              onDelete={this.onDeleteNoteHandler}
              onArchive={this.onArchiveNoteHandler}
            />
          ) : (
            <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
          )}

          {/* Archive Items */}
          <h2 className="note-app__body">Archive</h2>
          {hasArchived ? (
            <NoteList
              notes={searchedNotes.filter((note) => note.archived)}
              onDelete={this.onDeleteNoteHandler}
              moveArchive={this.moveArchiveNoteHandler}
            />
          ) : (
            <h3 className="notes-list__empty-message">Tidak ada catatan</h3>
          )}
        </div>
      </>
    );
  }
}

export default NoteApp;
