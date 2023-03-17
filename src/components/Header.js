import { Link } from 'react-router-dom';

import "./Header.css"

const Header = () => {
    return (
        <div id="header-body">
            <h1>Tri-Alpha</h1>
            <div id="nav-bar">
                <Link className='nav-item' to='/'>Home</Link>
                <Link className='nav-item' to='about'>About</Link>
                <Link className='nav-item' to='create'>Create</Link>
            </div>
        </div>

    )
}

export default Header;