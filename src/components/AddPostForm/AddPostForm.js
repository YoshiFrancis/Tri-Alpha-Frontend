import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import "./AddPostForm.css" 

import postService from '../../services/posts.js'

const AddPostForm = () => {
    const [newPost, setNewPost] = useState({
        topic: '',
        username: '',
        info: '',
        image: null,
        id: null
    });


    const [imagePage, setImagePage] = useState(false)

    const navigate = useNavigate()

    const addPost = async (newPost) => {
        let newId = await postService.create(newPost)
        return newId
      }
    
    if (imagePage) return (
        <div className="ultimate-container">
            <div className="form-container">
            <form 
                action={"http://localhost:3001/api/posts/create"}
                method="post"
                encType="multipart/form-data"
                >
                    <label htmlFor="image">Image or Video</label>
                    <input type="file" name="image" required/>
                    <input type="hidden" name="id" value={newPost.id} />
                    <button  type="submit" onClick={(e) => {
                        e.preventDefault()
                        navigate('../blogs')
                    }}>Submit Post</button>
            </form>
            <button type="button" onClick={() => {
                setImagePage(false)
                console.log("HGHELLO")
                navigate("../blogs")
            }
                }>No Photo</button>
            </div>
        </div>
    )
    return (
        <div className="ultimate-container">
            <div className="form-container">
                <form 
                encType="multipart/form-data"
                onSubmit={async (e) => {
                    e.preventDefault();
                    setNewPost({
                        topic: '',
                        username: '',
                        info: '',
                        image: null
                    })
                    let newId = await addPost(newPost)
                    
                    setNewPost({...newPost, id : newId})
                    setImagePage(true)
                }}>
                    <label htmlFor="topic">Topic:</label>
                    <input
                    autoFocus
                    autoComplete="off"
                    required
                    type = "text"
                    value={newPost.topic}
                    name="topic"
                    onChange={({ target }) => setNewPost({
                        ...newPost,
                        topic: target.value
                    })}
                    />
                    <label htmlFor="username">Name</label>
                    <input 
                    autoComplete='on'
                    required
                    type="text"
                    value={newPost.username}
                    name="username"
                    onChange={({ target}) => setNewPost({
                        ...newPost, 
                        username: target.value
                    })}
                    />
                    <label htmlFor="info">Blog:</label>
                    <input 
                    autoComplete='off'
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


