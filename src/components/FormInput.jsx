import React from "react";

function FormInput({ addNotes }) {
  const [limit, setLimit] = React.useState(50);
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value.slice(0, limit));
  };

  const handleChangeBody = (event) => {
    setBody(event.target.value);
  };

  const handleSubmitNotes = (event) => {
    event.preventDefault();
    addNotes({ title, body });
    setTitle("");
    setBody("");
  };

  return (
    <div className="note-app__body">
      <div className="note-input">
        <form onSubmit={handleSubmitNotes}>
          <h2>Buat Catatan Baru</h2>
          <p className="note-input__title__char-limit">
            Sisa karakter: {limit - title.length}
          </p>
          <input
            className="note-input__title"
            type="text"
            value={title}
            onChange={handleChangeTitle}
            placeholder="Ini adalah judul catatan ..."
            required
          />
          <textarea
            rows={10}
            value={body}
            onChange={handleChangeBody}
            placeholder="Tulis catatanmu di sini ..."
            required
          />
          <button type="submit">Buat</button>
        </form>
      </div>
    </div>
  );
}

export default FormInput;
