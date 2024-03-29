import React from 'react'
import Image from '../image/brand_logo.svg'
import navcss from './navbar.module.css'
function home() {
  return (
    <div>
      <nav className={navcss.navstyle}> 
        <div><img src={Image} alt='logo'/></div>
        
        <ul>
          <li href='#'>MENU</li>
          <li href='#'>LOCATION</li>
          <li href='#'>ABOUT</li>
          <li href='#'>CONTACT</li>
        </ul>
        <div> <button>Login</button></div>
       
      
      </nav>
    </div>
  )
}

export default home
