import "./Post.css"

const Post = ({ post }) => {
    return (
        <div id="card">
            <h1>Topic : Not Known</h1>
            <h2>Post by user</h2>
            <p>{post}</p>
        </div>
        
    )
}

export default Post