import * as React from "react"
import "./Navbar.css"
import Logo from "../Logo/Logo"

export default function Navbar() {
  return (
    <nav className="navbar">
    <div class="box head">
        <Logo />
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Buy Now</li>
      
    </div>
    </nav>
  )
}
