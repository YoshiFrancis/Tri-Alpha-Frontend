import "./Post.css"

const Post = ({ post, removePost }) => {

    return (
        <div id="card">
            <h1>Topic : {post.topic}</h1>
            <h2>Post by {post.username}</h2>
            <p>{post.info}</p>
            <button onClick={() => removePost(post.id)}>DELETE</button>
        </div>
        
    )
}

export default Post