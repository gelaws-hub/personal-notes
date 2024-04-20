import React from "react";

class NoteSearch extends React.Component {
  constructor(props) {
    super(props);

    this.state ={
        searchTitle: "",
    }
    this.onSearchHandler = this.onSearchHandler.bind(this)
  }

  onSearchHandler(event) {
    this.setState({
        searchTitle: event.target.value
    })
    event.preventDefault()
    this.props.onSearch(this.state)
  }

  render() {
    return (
      <div className="note-search">
        <input
          type="text"
          placeholder="Cari Judul Catatan..."
          value = {this.state.searchTitle}
          onChange={this.onSearchHandler}
        />
      </div>
    );
  }
}

export default NoteSearch;
