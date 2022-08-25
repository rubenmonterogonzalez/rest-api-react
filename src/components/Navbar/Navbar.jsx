import React from 'react'
import { HiOutlineMoon } from 'react-icons/hi'
import './Navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <h1>Where in the world?</h1>
            <p><HiOutlineMoon /> Dark Mode</p>
        </div>
    )
}

export default Navbar