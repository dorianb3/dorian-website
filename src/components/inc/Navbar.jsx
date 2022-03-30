import { Link } from 'react-router-dom';



function Navbar() {
    return (
    <div className="box hgroup-space-between">
        <Link className='brand' to='/'>
            <span className='bg-black badge fw-bold txt-white'>DB</span>
        </Link>

        <div>
            <Link className='badge' to='/blog'>Blog</Link>
            <Link className='badge' to='/projects'>Projects</Link>
            <Link className='badge' to='/about'>About</Link>
        </div> 

    </div>
    )
}

export default Navbar