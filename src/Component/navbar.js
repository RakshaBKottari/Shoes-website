import React from 'react'
import Image from '../image/brand_logo.svg'
import navcss from './navbar.module.css'
function home() {
  return (
    <div>
      <nav className={navcss.navstyle}> 
        
        <img src={Image} alt='logo'/>
        <ul>
          <li href='#'>MENU</li>
          <li href='#'>LOCATION</li>
          <li href='#'>ABOUT</li>
          <li href='#'>CONTACT</li>
        </ul>
        <button>Login</button>
      
      </nav>
    </div>
  )
}

export default home
