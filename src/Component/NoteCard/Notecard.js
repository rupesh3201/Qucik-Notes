import React from 'react'
import  './Notecard.css'
function Notecard({Title, Discription , Category , Emoji }) {
  return (
    <div className='NotecardConatiner'>
        <div className='Notecard'>
        <h1 className='Notecard_emoji'> {Emoji}</h1>
         <h1> {Title}</h1>
       </div>

    </div>
  )
}

export default Notecard