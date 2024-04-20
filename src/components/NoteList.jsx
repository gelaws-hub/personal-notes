import React from "react";
import NoteItem from "./NoteItem";

class NoteList extends React.Component {
    render() {
        return (
            <div className="notes-list">
                <NoteItem />
            </div>
        )
    }
}

export default NoteList;