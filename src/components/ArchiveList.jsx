import React from "react";
import ListItem from "./ListItem";

function ArchiveList({ archiveNotes, onActive, onDelete }) {
  return (
    <div className="notes-list">
      {archiveNotes?.map((note) => {
        return (
          <ListItem
            {...note}
            key={note.id}
            onClickButton={onActive}
            onDelete={onDelete}
            buttonName="Pindahkan"
          />
        );
      })}
    </div>
  );
}

export default ArchiveList;
