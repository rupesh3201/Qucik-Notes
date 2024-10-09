import React, { useState } from 'react'
import './add.css'
import HomeBtn from './../../Component/Home/HomeBtn'

function Add() {
  const [Title , setTitle] = useState("")
  const [Discription , setDiscription ] = useState("")
  const [Categary , setCategary ] = useState("")
  const [Emoji, setEmoji] = useState("")
  return (
    <div>
    <div>
      <h1 className='Heading'> <span></span>Add <span></span>Notes ✏️ </h1>
      {/* <h4 className='SubHeading'>“ Start where<span>  you </span>are. Use what <span> you  </span> have.  Do what<span>  you  </span>can🥷🏻” </h4> */}
    </div>
    <input 
    type='text '
    placeholder='Title'
    value={Title}
    onChange={(e)=>{
      console.log(e.target.value)
      setTitle(e.target.value)
      
    }}
    />
    <button type='button' onClick={()=>{setDiscription("");}} >Clear</button>
    <input 
    type='text '
    placeholder='Discription'
    value={Discription}
    onChange={(e)=>{
      console.log(e.target.value)
      setTitle(e.target.value)
      
    }}
    />

    <select value={Categary } onClick={(e)=>{setCategary(e.target.value);}}>
      <option value='shopping'>Shopping</option>
      <option value='work'>Work</option>
      <option value='personal'>Personal</option>
      <option value='Study'>Study</option>
      <option></option>
      <option></option>
    </select>
    <button type='button' onClick={()=>{setEmoji("");}} >Clear</button>
    <input 
    type='text '
    placeholder='Emoji'
    value={Emoji}
    onChange={(e)=>{
      console.log(e.target.value)
      setTitle(e.target.value)
      
    }}
    />
    <button type='button' onClick={()=>{setTitle("");}} >Clear</button>
    
   <HomeBtn/>
    </div>
  )
}

export default Add