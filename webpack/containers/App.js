import React from 'react';
import AddNote from '../components/AddNote';
import NoteList from '../components/NoteList';

class App extends React.Component {
  constructor(props) {
   super(props);
   this.handleSubmit = this.handleSubmit.bind(this);
   this.handleUpdate = this.handleUpdate.bind(this);
   this.deleteTodo = this.deleteTodo.bind(this);
   this.state = { stickyNotes: [] }
  }

  componentWillMount() {
   $.ajax({
     url: '/api/notes',
     type: 'GET',
     dataType: 'JSON'
   }).done( stickyNotes => {
     this.setState({ stickyNotes });
   });
  }

  handleSubmit(name) {
   $.ajax({
     url: '/api/notes',
     type: 'POST',
     dataType: 'JSON',
     data: { note: { name } }
   }).done( note => {
     this.setState({
       stickyNotes: [
         {...note},
         ...this.state.stickyNotes
       ]
     });
   });
  }

  handleUpdate(id) {
    $.ajax({
      url: `/api/notes/${id}`,
      type: 'PUT',
      dataType: 'JSON'
    }).done( note => {
      let notes = this.state.stickyNotes;
      let index = notes.findIndex( i => i.id === note.id );
      this.setState({
        stickyNotes: [
          ...notes.slice(0, index),
          {...notes[index], complete: note.complete},
          ...notes.slice(index + 1, note.length)
        ]
      });
    });
  }

  deleteTodo(id) {
    $.ajax({
      url: `/api/items/${id}`,
      type: 'DELETE'
    }).done( () => {
      this.setState({ stickyNotes: this.state.stickyNotes.filter( n => n.id !== id ) })
    });
  }

  render() {
   return (
     <div className="text-center">
       <AddNote handleSubmit={this.handleSubmit} />
       <NoteList
         handleUpdate={this.handleUpdate}
         deleteTodo={this.deleteTodo}
         stickyNotes={this.state.stickyNotes}
       />
     </div>
    )
  }
}

export default App;
