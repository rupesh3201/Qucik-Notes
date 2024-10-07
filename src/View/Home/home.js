import React from 'react'
import './home.css'
function Home() {
  return (
    <div>
    <div>
      <h1 className='Heading'> <span>Q</span>ucik <span>N</span>otes 📝 </h1>
      <h4 className='Heading'>“ Start where you are. Use what you have. Do what you can🥷🏻” </h4>
    </div>
    <div className='Button_container'>
      < button className='action_btn' >Add Notes ✍️</button>
      < button className='action_btn' >Views Notes📄</button>

      

    </div>
    </div>
  )
}

export default Home