import React from 'react';
import './Notecard.css';

function Notecard({ Title, Description, Category, Emoji }) {  // Changed Discription to Description
  return (
    <div className='NotecardConatiner'>
      <div className='Notecard'>
        <h1 className='Notecard_emoji'>{Emoji}</h1>
        <div className='NotecardDis'>
          <h1>{Title}</h1>
          <p>{Category}</p>
          <p>{Description}</p> {/* Fixed the prop name */}
        </div>
      </div>
    </div>
  );
}

export default Notecard;
