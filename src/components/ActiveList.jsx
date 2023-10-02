import React from "react";
import ListItem from "./ListItem";

function ActiveList({ activeNotes, onArchive, onDelete }) {
  return (
    <div className="notes-list">
      {activeNotes?.map((note) => {
        return (
          <ListItem
            {...note}
            key={note.id}
            onClickButton={onArchive}
            onDelete={onDelete}
            buttonName="Arsipkan"
          />
        );
      })}
    </div>
  );
}

export default ActiveList;
