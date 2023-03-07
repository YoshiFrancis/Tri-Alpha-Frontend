import { useState } from "react"


const AddPost = ({ setPostList, postList }) => {
    const [newPost, setNewPost] = useState('');
    return (
        <div>
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
            </form>
        </div>
    )
}

export default AddPost