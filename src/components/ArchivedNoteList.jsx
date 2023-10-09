import Note from "./Note";

function ArchivedNoteList({ notes, onDelete, onArchive }) {
  return (
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
  );
}

export default ArchivedNoteList;
