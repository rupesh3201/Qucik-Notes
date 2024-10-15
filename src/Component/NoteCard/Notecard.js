import React from 'react';
import './Notecard.css';

// shopping, work, personal, study, travel, gym, trek
function NoteCategory({ category }) {
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
    <span className='NotecardCatrgory'>
      {Categories_emoji[category]} {category[0].toUpperCase() }{category.slice(1)}
    </span>
  );
}

function Notecard({ Title, Description, Category, Emoji }) {
  return (
    <div className='NotecardContainer'> {/* Fixed typo */}
      <div className='Notecard'>
        <h1 className='Notecard_emoji'>{Emoji}</h1>
        <div className='NotecardDis'>
          <h2 className='NotecardTitle'>{Title}</h2>
          <p className='NotecardDescription'>{Description}</p> {/* Fixed typo */}
          <NoteCategory category={Category} /> {/* Fixed prop mismatch */}
        </div>
      </div>
    </div>
  );
}

export default Notecard;
