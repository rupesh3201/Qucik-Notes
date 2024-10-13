import React, { useState } from 'react'
import './show.css'
import HomeBtn from './../../Component/Home/HomeBtn'
function Show() {
  const [Notes,setNotes] = useState([])
  return (
    <div>
      <div>
      <h1 className='Heading'> <span></span>View <span></span>Notes 📄 </h1>
      {/* <h4 className='SubHeading'>“ Start where<span>  you </span>are. Use what <span> you  </span> have.  Do what<span>  you  </span>can🥷🏻” </h4> */}
    </div>
    <HomeBtn/>
    </div>
  )
}

export default Show