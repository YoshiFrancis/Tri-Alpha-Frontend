import { useState } from "react";
import Input from "./Input";

import "./Header.css"

const Header = ({ text }) => {
    const [title, setTitle] = useState(text);
    return (
        <div id="header-body">
            <h1>{title}</h1>
            <Input setTitle={setTitle} />
        </div>

    )
}

export default Header;