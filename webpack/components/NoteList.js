import React from 'react';
import Note from './Note';

const NoteList = ({ stickyNotes, handleUpdate, deleteNote }) => {
  let notes = stickyNotes.map( note => {
    return(
      <Note
        key={note.id}
        {...note}
        handleUpdate={handleUpdate}
        deleteNote={deleteNote}
      />
    );
  });

  return (
    <div className="row">
      {notes}
    </div>
  )
};

export default NoteList;
