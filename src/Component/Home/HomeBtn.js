import React from 'react'
import ImgHome from './../../Assets/home.png'
import { Link } from 'react-router-dom'
import './HomeBtn.css'
function Home() {
  return (
    <div>
    <Link to={"/"}>
     <img src={ImgHome} className='Actiontbtn-back' alt=''></img>
     </Link>
   </div>
  )
}

export default Home