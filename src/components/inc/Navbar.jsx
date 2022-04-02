import { Link } from 'react-router-dom';



function Navbar() {
    return (
    <div className="navbar box hgroup-space-between">
        <Link className='brand' to='/'>
            <span className='bg-elegant badge fw-bold txt-white'>DB</span>
        </Link>

        <div>
            {/* <Link className='nav-link' to='/#blog'>Blog</Link>
            <Link className='nav-link' to='/projects'>Projects</Link> */}
            <Link className='nav-link' to='/about'>About</Link>
        </div> 

    </div>
    )
}

export default Navbar