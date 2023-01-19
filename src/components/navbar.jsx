import React from 'react'
import '../styles/navbar.css'
export function Navbar() {
return (
    <div className='navbar'>
        <span className='navbar-brandname'>
        Gyaanam
        </span>
        <ul className='nav-buttons'>
            <li>Product</li>
            <li>Services</li>
            <li>About</li>
            <li><button>Log In</button></li>
        </ul>
    </div>
)
}
