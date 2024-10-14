import React from 'react';
import './Notecard.css';

function Notecard({ Title, Description, Category, Emoji }) {  // Changed Discription to Description
  return (
    <div className='NotecardConatiner'>
      <div className='Notecard'>
        <h1 className='Notecard_emoji'>{Emoji}</h1>
        <div className='NotecardDis'>
          <h2 className='Notecardtitle'>{Title}</h2>
          <p className='notcardDiscription'>{Description}</p>
          <p className='NotecardCatrgory'>{Category}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Notecard;
