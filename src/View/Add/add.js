import React, { useState } from 'react';
import './add.css';
import HomeBtn from './../../Component/Home/HomeBtn';
import EmojiPicker from 'emoji-picker-react';
import toast, { Toaster } from 'react-hot-toast';

function Add() {
  const [Title, setTitle] = useState("");
  const [Description, setDescription] = useState("");
  const [Category, setCategory] = useState("");
  const [Emoji, setEmoji] = useState("");
  const [OpenEmoji, SetOpenEmoji] = useState(false);

  const Addnote = () => {
    const Notes = JSON.parse(localStorage.getItem("notes")) || [];
    const notesobj = {
      Title: Title,
      Description: Description,
      Category: Category,
      Emoji: Emoji
    };
    Notes.push(notesobj);
    localStorage.setItem("notes", JSON.stringify(Notes));
    toast.success("Note Added Successfully!");
    setTitle("");
    setDescription("");
    setCategory("");
    setEmoji("");
  };

  return (
    <div>
      <div>
        <h1 className='Heading'>Add Notes ✏️</h1>
      </div>
      <div className='Inputcontainer'>
        <input
          type='text'
          placeholder='Title'
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          className="userinput"
        />
        <input
          type='text'
          placeholder='Description'
          value={Description}
          onChange={(e) => setDescription(e.target.value)}
          className="userinput"
        />

        <select value={Category} onChange={(e) => setCategory(e.target.value)} className='dropdown'>
          <option className='Dropdown' value=''>Select Category</option>
          <option className='Dropdown' value='shopping'>Shopping</option>
          <option className='Dropdown' value='work'>Work</option>
          <option className='Dropdown' value='personal'>Personal</option>
          <option className='Dropdown' value='study'>Study</option>
          <option className='Dropdown' value='travel'>Travel</option>
          <option className='Dropdown' value='travel'>Gym</option>
          <option className='Dropdown' value='travel'>Treak</option>
        </select>

        {OpenEmoji && (
          <EmojiPicker
            className='EmojiPicker'
            onEmojiClick={(emojiObj) => {
              setEmoji(emojiObj.emoji);
              SetOpenEmoji(false);
            }}
          />
        )}
        <Toaster />

        <button
          type='button'
          onClick={() => SetOpenEmoji(true)}
          className='ActionBtn userinputemoji'>
          {Emoji ? Emoji : 'Select Emoji'}
        </button>

        <button
          type='button'
          onClick={Addnote}
          className='ActionBtn1'
          disabled={!Title || !Description || !Category}
        >
          Add Note
        </button>
      </div>
      <HomeBtn />
    </div>
  );
}

export default Add;
