import React from "react";

function Navbar({ onSearch }) {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className="note-search">
        <input
          onChange={(event) => onSearch(event)}
          placeholder="Cari catatan..."
        />
      </div>
    </div>
  );
}

export default Navbar;
