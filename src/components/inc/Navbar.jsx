import { Link } from 'react-router-dom';



function Navbar() {
    return (
    <div className="navbar">
        <Link className='brand' to='/'>
            <span className='dark bold'>DB</span>
        </Link>

        <div className="links">
            <Link className='link' to='/blog'>Blog</Link>
            <Link className='link' to='/projects'>Projects</Link>
            <Link className='link' to='/about'>About</Link>
        </div> 

    </div>
    )
}

export default Navbar