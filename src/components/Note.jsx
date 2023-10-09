function Note({ note, onDelete, onArchive }) {
  const handleDelete = () => {
    onDelete(note.id);
  };

  const handleArchive = () => {
    onArchive(note.id);
  };

  return (
    <div className={"card mb-3 shadow-lg border-0 rounded"}>
      <div className="card-body">
        <h5 className="card-title">{note.title}</h5>
        <p className="card-text">{note.body}</p>
        <p className="card-text">Created At: {note.createdAt.slice(0, 10)}</p>
        <div className="btn-group">
          <button className="btn btn-danger" onClick={handleDelete}>
            Hapus
          </button>
          <button
            className={`btn btn-primary ${
              note.archived ? "unarchive" : "archive"
            }`}
            onClick={handleArchive}
          >
            {note.archived ? "Unarchive" : "Archive"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
