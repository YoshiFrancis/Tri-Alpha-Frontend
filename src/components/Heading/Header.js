import { useState } from "react";

import "./Header.css"

const Header = () => {
    const [title, setTitle] = useState('Tri Alpha');
    return (
        <div id="header-body">
            <h1>{title}</h1>
            <div id="nav-bar">
                <div id="francis" className="person-nav">
                    <button >Francis</button>
                </div>
                <div id="houston" className="person-nav">
                    <button>Houston</button>
                </div>
                <div id="jack" className="person-nav">
                    <button>Jack</button>
                </div>
                <div id="sam" className="person-nav">
                    <button>Sam</button>
                </div>
                <div id="jake" className="person-nav">
                    <button>Jake</button>
                </div>
                <div id="walker" className="person-nav">
                    <button>Walker</button>
                </div>
                <div id="henry" className="person-nav">
                    <button>Henry</button>
                </div>
                <div id="grayson" className="person-nav">
                    <button>Grayson</button>
                </div>
            </div>
        </div>

    )
}

export default Header;