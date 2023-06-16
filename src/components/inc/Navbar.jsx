import React from 'react';
import { NavLink } from 'react-router-dom';



function Navbar() {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/'>Home</NavLink>
            {/* <NavLink to='/blog'>Blog</NavLink> */}
            {/* <NavLink to='/projects'>Projects</NavLink> */}
            <NavLink to='/resume'>CV</NavLink>
        </nav>

    )
}

export default Navbar