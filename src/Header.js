import React from "react";
import './Header.css'

function Header() {
  return (
    <div className="header">
      <div>
        <div className="typewriter">
          <div className="typewriter-text">
            Aya Mallah
          </div>
        </div>
        <h3 className="animate__animated animate__slideInRight">Junior Front-end Developer </h3>
      </div>
      <div>
        <img src="https://res.cloudinary.com/dhrxw6zhp/image/upload/v1635026738/Web_development__Outline_2_j0lxnp.png" alt="computer" />
      </div>
    </div>
  )

}
export default Header