import { useState } from "react";

const AddPostForm = ({addPost}) => {
    const [newPost, setNewPost] = useState({
        topic: 'None',
        username: 'Anonymous',
        info: 'None'
    });
    return (
        <form onSubmit={async (e) => {
            e.preventDefault();
            await addPost(newPost)
            setNewPost({
                topic: 'None',
                username: 'Anonymous',
                info: 'None'
            })
        }}>
            <input
            type = "text"
            value={newPost.topic}
            name="topic"
            onChange={({ target }) => setNewPost({
                ...newPost,
                topic: target.value
            })}
            placeholder="Topic"
            />
            <input 
            type="text"
            value={newPost.username}
            name="username"
            onChange={({ target}) => setNewPost({
                ...newPost, 
                username: target.value
            })}
            placeholder="Name"
            />
            <input 
            type="text"
            value={newPost.info}
            name="info"
            onChange={({ target }) => setNewPost({
                ...newPost,
                info: target.value
            })}
            placeholder="Input Info here"
            />

            <button 
            type="submit">Add Post
            </button>
        </form>
    )
}

export default AddPostForm