import { useState } from "react";
import "./App.css";
import NoteList from "./components/NoteList";
import AddNoteForm from "./components/AddNoteForm";
import "bootstrap/dist/css/bootstrap.min.css";
import ArchivedNoteList from "./components/ArchivedNoteList";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Lorem",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore eligendi doloremque quibusdam. Alias aliquid mollitia officiis, sequi itaque quia laudantium nihil rem ratione voluptatum.",
      archived: false,
      createdAt: "2022-09-28",
    },
    {
      id: 2,
      title: "Lorem ipsum",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore eligendi doloremque quibusdam. Alias aliquid mollitia officiis, sequi itaque quia laudantium nihil rem ratione voluptatum.",
      archived: false,
      createdAt: "2022-09-28",
    },
    {
      id: 3,
      title: "dolor amet",
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto labore eligendi doloremque quibusdam. Alias aliquid mollitia officiis, sequi itaque quia laudantium nihil rem ratione voluptatum.",
      archived: false,
      createdAt: "2022-09-28",
    },
  ]);

  const addNote = (newNote) => {
    const newId = +new Date();
    const createdNote = {
      id: newId,
      title: newNote.title,
      body: newNote.body,
      archived: false,
      createdAt: new Date().toISOString(),
    };
    setNotes([...notes, createdNote]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const [, setArchivedNotes] = useState([]);
  const archiveNote = (id) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === id) {
        return { ...note, archived: !note.archived };
      }
      return note;
    });
    setNotes(updatedNotes);

    const updatedArchivedNotes = updatedNotes.filter((note) => note.archived);
    setArchivedNotes(updatedArchivedNotes);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mt-3">
      <h1 className="text-center mb-5">Aplikasi Catatan Pribadi</h1>
      <div className="col-lg-8 m-auto mb-5">
        <AddNoteForm onAddNote={addNote} />
        <div className="mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Cari catatan..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8 m-auto">
          <div>
            <h2>Daftar Catatan</h2>
            {filteredNotes.filter((note) => !note.archived).length === 0 ? (
              <p>Tidak ada catatan.</p>
            ) : (
              <NoteList
                notes={filteredNotes.filter((note) => !note.archived)}
                onDelete={deleteNote}
                onArchive={archiveNote}
              />
            )}
          </div>
          <div className="mt-5">
            <h2>Daftar Catatan yang Diarsipkan</h2>
            {filteredNotes.filter((note) => note.archived).length === 0 ? (
              <p>Tidak ada catatan diarsipkan.</p>
            ) : (
              <ArchivedNoteList
                notes={filteredNotes.filter((note) => note.archived)}
                onDelete={deleteNote}
                onArchive={archiveNote}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
