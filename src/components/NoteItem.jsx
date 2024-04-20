import React from "react";
import NoteItemAction from "./NoteItemAction";

function NoteItem({
  id,
  title,
  body,
  createdAt,
  archived,
  onDelete,
  onArchive,
  moveArchive,
}) {
  return (
    <div className="note-item">
      <div className="note-item__content">
        <h3 className="note-item__title">{title}</h3>
        <p className="note-item__date">{createdAt}</p>
        <p className="note-item__body">{body}</p>
      </div>
      <NoteItemAction
        id={id}
        onArchive={onArchive}
        onDelete={onDelete}
        archieved={archived}
        moveArchive={moveArchive}
      />
    </div>
  );
}

export default NoteItem;
