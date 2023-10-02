import React from "react";
import Navbar from "./Navbar";
import BodySection from "./BodySection";
import FormInput from "./FormInput";
import { getInitialData } from "../utils";

function PersonalNotes() {
  const [notes, setNotes] = React.useState(getInitialData || []);
  const [search, setSearch] = React.useState("");

  const handleSubmitNotes = ({ title, body }) => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title,
        body,
        createdAt: new Date().toDateString(),
        archived: false,
      },
    ]);
  };

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const handleArchive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: true } : note
    );
    setNotes(updatedNotes);
  };

  const handleActive = (id) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, archived: false } : note
    );
    setNotes(updatedNotes);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const searchNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(search.toLowerCase())
  );

  const activeNotes = searchNotes.filter((note) => !note.archived);
  const archivedNotes = searchNotes.filter((note) => note.archived);

  return (
    <>
      <Navbar onSearch={handleSearch} />
      <div className="note-app__body">
        <FormInput addNotes={handleSubmitNotes} />
        <BodySection
          activeNotes={activeNotes}
          archivedNotes={archivedNotes}
          onArchive={handleArchive}
          onActive={handleActive}
          onDelete={handleDelete}
        />
      </div>
    </>
  );
}

export default PersonalNotes;
