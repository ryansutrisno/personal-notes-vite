import React from "react";
import ActiveList from "./ActiveList";
import ArchiveList from "./ArchiveList";

function BodySection({
  activeNotes,
  archivedNotes,
  onActive,
  onArchive,
  onDelete,
}) {
  return (
    <>
      <h2>Catatan Aktif</h2>
      <ActiveList
        activeNotes={activeNotes}
        onArchive={onArchive}
        onDelete={onDelete}
      />
      {activeNotes.length === 0 && (
        <p className="notes-list__empty-message">Tidak ada catatan aktif</p>
      )}
      <h2>Arsip</h2>
      <ArchiveList
        archiveNotes={archivedNotes}
        onActive={onActive}
        onDelete={onDelete}
      />
      {archivedNotes.length === 0 && (
        <p className="notes-list__empty-message">Tidak ada catatan arsip</p>
      )}
    </>
  );
}

export default BodySection;
