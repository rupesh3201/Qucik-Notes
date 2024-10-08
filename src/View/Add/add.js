import React from 'react'
import './add.css'
import ImgHome from './../../Assets/home.png'
import { Link } from 'react-router-dom'
function Add() {
  return (
    <div>
    <div>
      <h1 className='Heading'> <span></span>Add <span></span>Notes ✏️ </h1>
      {/* <h4 className='SubHeading'>“ Start where<span>  you </span>are. Use what <span> you  </span> have.  Do what<span>  you  </span>can🥷🏻” </h4> */}
    </div>
    <div>
     <Link to={"/"}>
      <img src={ImgHome} className='Actiontbtn-back' alt=''></img>
      </Link>
    </div>

    </div>
  )
}

export default Add