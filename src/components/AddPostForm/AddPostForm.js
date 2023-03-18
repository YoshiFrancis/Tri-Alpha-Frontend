import { useState } from "react";

import "./AddPostForm.css" 

import postService from '../../services/posts.js'

const AddPostForm = () => {
    const [newPost, setNewPost] = useState({
        topic: 'None',
        username: 'Anonymous',
        info: 'None'
    });

    const addPost = async (newPost) => {
        await postService.create(newPost)
      }

    return (
        <div id="ultimate-container">
            <div id="form-container">
                <form onSubmit={async (e) => {
                    e.preventDefault();
                    setNewPost({
                        topic: 'None',
                        username: 'Anonymous',
                        info: 'None'
                    })
                    await addPost(newPost)
                }}>
                    <label for="topic">Topic:</label>
                    <input
                    required
                    type = "text"
                    value={newPost.topic}
                    name="topic"
                    onChange={({ target }) => setNewPost({
                        ...newPost,
                        topic: target.value
                    })}
                    />
                    <label for="username:">Name</label>
                    <input 
                    required
                    type="text"
                    value={newPost.username}
                    name="username"
                    onChange={({ target}) => setNewPost({
                        ...newPost, 
                        username: target.value
                    })}
                    />
                    <label for="info">Blog:</label>
                    <input 
                    required
                    type="text"
                    value={newPost.info}
                    name="info"
                    onChange={({ target }) => setNewPost({
                        ...newPost,
                        info: target.value
                    })}
                    />

                    <button 
                    type="submit">Add Post
                    </button>
                </form>
            </div>
        </div>
        
    )
}

export default AddPostForm