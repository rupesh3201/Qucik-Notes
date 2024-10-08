import React, { useState } from 'react'
import './add.css'
import HomeBtn from './../../Component/Home/HomeBtn'

function Add() {
  const [Title , setTitle] = useState("")
  return (
    <div>
    <div>
      <h1 className='Heading'> <span></span>Add <span></span>Notes ✏️ </h1>
      {/* <h4 className='SubHeading'>“ Start where<span>  you </span>are. Use what <span> you  </span> have.  Do what<span>  you  </span>can🥷🏻” </h4> */}
    </div>
    <input type='text ' placeholder='Title'/>
   <HomeBtn/>
    </div>
  )
}

export default Add