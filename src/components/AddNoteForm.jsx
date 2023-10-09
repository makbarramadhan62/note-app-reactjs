import { useState } from "react";

function AddNoteForm({ onAddNote }) {
  const [newNote, setNewNote] = useState({ title: "", body: "" });
  const [characterCount, setCharacterCount] = useState(0);

  const addNote = () => {
    if (newNote.title.trim() === "" || newNote.body.trim() === "") return;
    onAddNote(newNote);
    setNewNote({ title: "", body: "" });
    setCharacterCount(0);
  };

  const handleTitleChange = (e) => {
    const title = e.target.value;
    if (title.length <= 50) {
      setNewNote({ ...newNote, title });
      setCharacterCount(title.length);
    }
  };

  return (
    <div>
      <h2>Tambah Catatan</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Judul"
          value={newNote.title}
          onChange={handleTitleChange}
        />
        <p className="text-muted">{50 - characterCount} karakter tersisa</p>
      </div>
      <div className="mb-3">
        <textarea
          style={{ minHeight: 180 }}
          className="form-control"
          placeholder="Isi catatan"
          value={newNote.body}
          onChange={(e) => setNewNote({ ...newNote, body: e.target.value })}
        />
      </div>
      <button className="btn btn-success" onClick={addNote}>
        Tambahkan
      </button>
    </div>
  );
}

export default AddNoteForm;
