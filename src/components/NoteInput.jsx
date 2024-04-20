import React from "react";

class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
    };

    this.onTitleChangeHandler = this.onTitleChangeHandler.bind(this);
    this.onBodyChangeHandler = this.onBodyChangeHandler.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onTitleChangeHandler(event) {
    const title = event.target.value;
    const isTitleValid = title.length <= 50;

    this.setState({
      title: isTitleValid ? title : this.state.title,
    });
  }

  onBodyChangeHandler(event) {
    this.setState({
      body: event.target.value,
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();

    this.state.title.trim() !== "" && this.state.body.trim() !== ""
      ? this.props.addNote(this.state)
      : alert("Tidak boleh ada field yang kosong!");

    //reset form input
    this.setState(() => {
      return {
        title: "",
        body: "",
      };
    });
  }

  render() {
    const { title } = this.state;
    const titleLength = title.length;
    const isTitleValid = titleLength <= 50;
    const titleLengthRemaining = 50 - titleLength;

    return (
      <form className="note-input">
        <h2>Buat Catatan</h2>
        <p className="note-input__title__char-limit">
          Karakter tersisa : {isTitleValid ? titleLengthRemaining : 0}
        </p>
        <input //title field
          className={`note-input__title ${!isTitleValid && "invalid"}`}
          id="title"
          placeholder="Masukkan Judul Catatan..."
          value={this.state.title}
          onChange={this.onTitleChangeHandler}
          maxLength={50}
        />
        <textarea //body field
          className="note-input__body"
          id="body"
          placeholder="Masukkan Isi Catatan..."
          value={this.state.body}
          onChange={this.onBodyChangeHandler}
        />
        <button
          className="note-input__submit-button"
          onClick={this.onSubmitHandler}
        >
          Tambah
        </button>
      </form>
    );
  }
}

export default NoteInput;
