import { useState } from "react";
import Input from "./Input";

const Header = ({ text }) => {
    const [title, setTitle] = useState(text);
    return (
        <div>
            <h1>{title}</h1>
            <Input setTitle={setTitle} />
        </div>

    )
}

export default Header;