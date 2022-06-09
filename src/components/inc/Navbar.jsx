import { NavLink } from 'react-router-dom';



function Navbar() {
    return (
        <nav>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")} to='/'>Home</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            {/* <NavLink to='/projects'>Projects</NavLink> */}
            <NavLink to='/about'>About</NavLink>
        </nav>

    )
}

export default Navbar