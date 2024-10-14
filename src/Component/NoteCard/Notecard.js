import React from 'react'
import  './Notecard.css'
function Notecard({Title, Discription , Category , Emoji }) {
  return (
    <div>
        <div className='CardConatiner'>
       <div className='Card_Logo'>
            {Emoji}
       </div>
       <div className='Crad_Title'>
           <h3> {Title}</h3>
       </div>
       </div>

    </div>
  )
}

export default Notecard