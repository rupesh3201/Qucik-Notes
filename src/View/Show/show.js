import React, { useEffect, useState } from 'react';
import './show.css';
import HomeBtn from './../../Component/Home/HomeBtn';

function Show() {
  const [Notes, setNotes] = useState([]);

  useEffect(() => {
    const SavedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    setNotes(SavedNotes);
  }, []);

  return (
    <div>
      <div>
        <h1 className='Heading'>View Notes 📄</h1>
        {Notes.length === 0 ? (
          <p>No notes available</p>
        ) : (
          Notes.map((note, index) => {
            const { Title, Description, Category, Emoji } = note;
            return (
              <div key={index} className="noteCard">
                <h3>{Emoji} {Title}</h3>
                <p>{Description}</p>
                <span className='noteCategory'>{Category}</span>
              </div>
            );
          })
        )}
      </div>
      <HomeBtn />
    </div>
  );
}

export default Show;
