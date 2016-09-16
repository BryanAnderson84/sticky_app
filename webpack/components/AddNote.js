import React from 'react';

const AddNote = ({ handleSubmit }) => {
 let input;
 return(
   <div>
     <input required={true} ref={ node => { input = node } }/>
     <button className='btn'
             onClick={ () => {
               handleSubmit(input.value);
               input.value = '';
     }}>
       Add
     </button>
   </div>
 );
}

export default AddNote;
