import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTitle: "",
    };
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onSearchHandler(event) {
    const searchTitle = event.target.value;
    this.setState(
      {
        searchTitle: searchTitle,
      },
      () => {
        this.props.onSearch(this.state.searchTitle);
      }
    );
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari Judul Catatan..."
          value={this.state.searchTitle}
          onChange={this.onSearchHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
