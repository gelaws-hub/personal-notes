import React from "react";

function NoteItemAction({ id, onDelete, archieved, onArchive, moveArchive }) {
  return (
    <div className="note-item__action">
      <button className="note-item__delete-button" onClick={() => onDelete(id)}>
        Delete
      </button>

      {archieved ? (
        <button
          className="note-item__archive-button"
          onClick={() => moveArchive(id)}
        >
          Unarchive
        </button>
      ) : (
        <button
          className="note-item__archive-button"
          onClick={() => onArchive(id)}
        >
          Archive
        </button>
      )}
    </div>
  );
}

export default NoteItemAction;
