import React from "react";

function NoteItem ({ id, title, body, createdAt, archived, onDelete }) {
    return (
        <div className="note-item">
            <h3 className="note-item__title">{title}</h3>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__body">{body}</p>
            <div className="note-item__action">
                <button className="note-item__delete-button" onClick={() => onDelete(id)}>Delete</button>
                <button className="note-item__archive-button" onClick={() => onArchive()} >Archive</button>
            </div>
        </div>
    );
}

export default NoteItem;