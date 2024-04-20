import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form className="note-input">
        <p className="note-input__title__char-limit">Karakter tersisa : 50</p>
        <input
          className="note-input__title"
          id="title"
          placeholder="Masukkan Judul Catatan"
        />
        <input
          className="note-input__body"
          id="body"
          placeholder="Masukkan Judul Catatan"
        />
      </form>
    );
  }
}

export default NoteInput;
