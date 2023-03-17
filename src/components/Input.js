import { useState } from "react"

const Input = ({ setTitle }) => {
    const [text, setText] = useState('');

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                setTitle(text)
                setText('');

            }}>
                <input 
                type="text"
                value = {text}
                name="text"
                onChange={({ target }) => setText(target.value)}
                />
                <button 
                type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default Input