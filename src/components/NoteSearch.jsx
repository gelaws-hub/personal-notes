import React from "react";

class NoteSearch extends React.Component {

    render() {
        return (
            <div className="note-search">
                <input
                    type="text"
                    placeholder="Cari Judul Catatan..."
                    onChange={this.props.onSearch}
                />
            </div>
        );
    }
}

export default NoteSearch;