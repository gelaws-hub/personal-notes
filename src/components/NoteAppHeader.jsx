import React from "react"
import NoteSearch from "./NoteSearch";

function NoteAppHeader() {
    return (
        <div className="note-app__header">
            <h1>Note App</h1>
            <NoteSearch />
        </div>
    )
}

export default NoteAppHeader;