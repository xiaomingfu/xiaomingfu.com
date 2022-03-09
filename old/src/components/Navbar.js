import React from "react"
import { Link } from "gatsby"

function Navbar() {
  return (
    <div className="Navbar">
      <div>
        <i className="far fa-user"></i>
        <Link to="./components/About">About</Link>
      </div>
      <div>
        <i className="fas fa-briefcase"></i>
        <Link to="./components/Projects">Projects</Link>
      </div>
      <div>
        <i className="far fa-envelope"></i>
        <Link to="./components/Contact">Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
