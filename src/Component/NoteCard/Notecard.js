import React from 'react';
import './Notecard.css';
import Deleteicon from '../../Assets/trash.png'

// Function to convert first letter of a string to uppercase
function toUpperCase(string) {
  return string[0].toUpperCase() + string.slice(1);
}

function NoteCategory({ category  }) {
  const Categories_emoji = {
    "shopping": "🛍️",
    "work": "💼",
    "personal": "👤",
    "study": "👩🏻‍💻",
    "travel": "✈️",
    "gym": "🏋🏻‍♀️",
    "trek": "⛰️",  // Changed "Treak" to "trek" for consistency
  };

  return (
    <span className={`NotecardCategory bg-${category}`}>
      {Categories_emoji[category]} {toUpperCase(category)}
    </span>
  );
}

function Notecard({ Title, Description, Category, Emoji }) {
  return (
    <div className='Notes_parent_continer'>
    <div className='NotecardContainer'>
      <div className='Notecard'>
        <h1 className='Notecard_emoji'>{Emoji}</h1>
        <div className='NotecardDis'>
          <h2 className='NotecardTitle'>{Title}</h2>
          <p className='NotecardDescription'>{Description}</p> {/* Fixed typo */}
          <NoteCategory category={Category} /> {/* Passed the correct prop */}
        </div>
        <img src={Deleteicon} className='notecardactionbtn'></img>
      </div>
    </div>
    </div>
  );
}

export default Notecard;
