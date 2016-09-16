import React from 'react';

const Note = ({ id, complete, name, handleUpdate, deleteNote }) => (
  <div className="col s12">
    <div className="col m8">
      <div
        style={ complete ? {textDecoration: 'line-through' } : {}}
        className="center"
      >
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`note-${id}`}
        type="checkbox"
        defaultChecked={complete}
        onClick={ () => handleUpdate(id) }
      />
    <label htmlFor={`note-${id}`}>Complete?</label>
    </div>
    <div
      style={{ cursor: 'pointer' }}
      className="col m1"
      onClick={ () => deleteTodo(id) }
    >
      X
    </div>
  </div>
);

export default Note;
