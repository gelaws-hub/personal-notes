import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete}) {
    if(!notes){
        return <h3 className="notes-list__empty-message"> Tidak ada catatan </h3>
    }
    return (
        <div className="notes-list">
            {notes.map((note) => (
                <NoteItem {...notes}
                key={note.id} 
                onDelete={onDelete}
                id={note.id} />
            ))}
        </div>
    )
}

export default NoteList;