import { useState } from "react";


const AddPostForm = ({setPostList, postList}) => {
    const [newPost, setNewPost] = useState('');
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            setPostList(postList.concat(newPost))
            setNewPost('');
        }}>
            <input
            type = "text"
            value={newPost}
            name="newPost"
            onChange={({ target }) => setNewPost(target.value)}
            />
            <button 
            type="submit">Add Post
            </button>
        </form>
    )
}

export default AddPostForm