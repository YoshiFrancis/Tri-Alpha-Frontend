import AddPostForm from "./AddPostForm/AddPostForm";

import { useState } from "react"


const AddPost = ({ addPost}) => {
    const [show, setShow] = useState(false);
    const [buttonText, setButtonText] = useState("Add A Post");

    
    return (
        <div>
            <form>
                <button 
                onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                    if(!show) setButtonText("X")
                    else setButtonText("Add A Post");
                }} >{buttonText}</button>
            </form>
            
        
        {show && <AddPostForm addPost={addPost} />}

        </div>
    )
}

export default AddPost