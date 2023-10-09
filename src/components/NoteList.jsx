import Note from "./Note";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div>
      <ul className="list-group">
        {notes.map((note) => (
          <Note
            key={note.id}
            note={note}
            onDelete={onDelete}
            onArchive={onArchive}
          />
        ))}
      </ul>
    </div>
  );
}

export default NoteList;
