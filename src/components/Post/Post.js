import { useState, useEffect } from "react"
import "./Post.css"
const Post = ({ post, removePost }) => {
    
    const [image, setImage] = useState(false)
    document.body.style.backGround = "red"

    useEffect(() => {
        if (post.image) setImage(true)

    }, [])

    return (
        <div id="card">
            <h1>Topic : {post.topic}</h1>
            <h2>Post by {post.username}</h2>
            {image && <img className="image" src={`../${post.image.substring(46)}`} alt="lol"></img>}
            <p>{post.info}</p>
            <button onClick={() => removePost(post.id)}>DELETE</button>
        </div>
        
    )
}
export default Post
