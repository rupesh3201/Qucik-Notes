import React from 'react';
import './Notecard.css';
import Deleteicon from '../../Assets/trash.png';
import toast, { Toaster } from 'react-hot-toast';

// Function to convert the first letter of a string to uppercase
function toUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function Delete_note(index) {
  const SavedNotes = JSON.parse(localStorage.getItem('notes')) || [];
  SavedNotes.splice(index, 1);
  localStorage.setItem('notes', JSON.stringify(SavedNotes));
  window.location.reload(); // Consider using a state update instead of reloading the window
}

function NoteCategory({ category }) {
  const Categories_emoji = {
    shopping: '🛍️',
    work: '💼',
    personal: '👤',
    study: '👩🏻‍💻',
    travel: '✈️',
    gym: '🏋🏻‍♀️',
    trek: '⛰️', // Changed "Treak" to "trek" for consistency
  };

  return (
    <span className={`NotecardCategory bg-${category}`}>
      {Categories_emoji[category]} {toUpperCase(category)}
    </span>
  );
}

function Notecard({ Title, Description, Category, Emoji, index }) {
  return (
    <div className='Notes_parent_continer'>
      <div className='NotecardContainer'>
        <div className='Notecard'>
          <h1 className='Notecard_emoji'>{Emoji}</h1>
          <div className='NotecardDis'>
            <h2 className='NotecardTitle'>{Title}</h2>
            <p className='NotecardDescription'>{Description}</p>
            <NoteCategory category={Category} />
          </div>
          <img
            src={Deleteicon}
            className='notecardactionbtn'
            onClick={() => {
              Delete_note(index);
              toast.success("Note Deleted Successfully")
            }}
            alt="Delete"

          />
          <Toaster/>
        </div>
      </div>
    </div>
  );
}

export default Notecard;
