import React, { useState } from 'react'
import './add.css'
import HomeBtn from './../../Component/Home/HomeBtn'
import EmojiPicker from 'emoji-picker-react';
import { isDisabled } from '@testing-library/user-event/dist/utils';
import toast, { Toaster } from 'react-hot-toast';

function Add() {
  const [Title , setTitle] = useState("")
  const [Discription , setDiscription ] = useState("")
  const [Categary , setCategary ] = useState("")
  const [Emoji, setEmoji] = useState("")
  const [OpenEmoji , SetOpenEmoji] = useState(false)
const Addnote =()=>
{
  const Notes = JSON.parse(localStorage.getItem("notes")) ||[];
  const notesobj = {
    Title : Title , 
    Discription: Discription,
    Categary: Categary,
    Emoji :Emoji
  }
  Notes.push(notesobj)
  localStorage.setItem ("Notes", JSON.stringify(notesobj));
  toast.success("Note Added Sucessfully !");
  setTitle("");
  setDiscription("");
  setCategary("");
  SetOpenEmoji("");

};
  return (
    <div>
    <div>
      <h1 className='Heading'> <span></span>Add <span></span>Notes ✏️ </h1>
      {/* <h4 className='SubHeading'>“ Start where<span>  you </span>are. Use what <span> you  </span> have.  Do what<span>  you  </span>can🥷🏻” </h4> */}
    </div>
    <div className='Inputcontainer'>
    <input 
    type='text '
    placeholder='Title'
    value={Title}
    onChange={(e)=>{
      console.log(e.target.value)
      setTitle(e.target.value)
      
    }}
    className="userinput"
    />
    <input 
    type='text '
    placeholder='Discription'
    value={Discription}
    onChange={(e)=>{
      console.log(e.target.value)
      setDiscription(e.target.value)
      
    }}
     className="userinput"
    />
  

    <select value={Categary } onChange={(e)=>{setCategary(e.target.value);}} className='deopdown' >
    <option className='Dropdown' value=''>Select Categary</option>
      <option  className='Dropdown' value='shopping'>Shopping</option>
      <option  className='Dropdown' value='work'>Work</option>
      <option  className='Dropdown' value='personal'>Personal</option>
      <option  className='Dropdown' value='study'>Study</option>
      <option  className='Dropdown' value='travel'>Travel</option>
     
    </select>
    <EmojiPicker  
  className='EmojiPicker'
  open={OpenEmoji}
  onEmojiClick={(emojiObj)=>{setEmoji(emojiObj.emoji)
    SetOpenEmoji(false)
  }}
   />
   <Toaster/>
    <button type='button' onClick={()=>SetOpenEmoji(true)} className='ActionBtn userinputemoji'   >  {Emoji ? Emoji :'Select Emoji' } </button>
   


   <button type='button' onClick={Addnote}
    
    className='ActionBtn1'> Add Note </button>
    </div>
   <HomeBtn/>
   {/*3
   */}
    </div>
  )
}

export default Add