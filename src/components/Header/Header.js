import { Link } from 'react-router-dom';

import "./Header.css"

const Header = () => {
    return (
        <div id="header-body">
            <div className="logo-holder" id="left-logo"></div>
            <h1 id="header-text">We Are Tri-Alpha</h1>
            <div className="logo-holder" id="right-logo"></div>
            <div id="nav-bar">
                <Link className='nav-item' to='/'>Home</Link>
                <Link className='nav-item' to='blogs'>View Blogs</Link>
                <Link className='nav-item' to='about'>About</Link>
                <Link className='nav-item' to='create'>Create</Link>
            </div>
        </div>

    )
}

export default Header;