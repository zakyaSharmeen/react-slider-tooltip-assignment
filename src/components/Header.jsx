import React from 'react'
import { FaCaretDown } from "react-icons/fa";


function Header() {
  return (
    <div>
      <div className="main-head-conatiner">
        <div className="container">
        <div class="navbar">
          <div class="navbar-left">
            <h1>HyperHire</h1>
          </div>

          <div class="navbar-center">
            <div class="dropdown">
              <button class="dropbtn">Options <FaCaretDown /></button>
              <div class="dropdown-content">
                <a href="#">Option 1</a>
                <a href="#">Option 2</a>
                <a href="#">Option 3</a>
              </div>
            </div>
            <div className='lorem-content'>
            <p>loremipsum</p>
          </div>
          </div>

         

          <div class="navbar-right">
            <p><a href="#">Contact Us</a></p>
          </div>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Header