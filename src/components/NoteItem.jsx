import React from "react";

function NoteItem ({ title, body, createdAt, archived }) {
    return (
        <div className="note-item">
            <h2 className="note-item__title">Something</h2>
            <p className="note-item__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum delectus tempore adipisci ratione, eligendi nam molestias provident dolores numquam.</p>
            <p className="note-item__date">{createdAt}</p>
            <p className="note-item__archived">{archived}</p>
        </div>
    );
}

export default NoteItem;