import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";

import { useState } from "react";

const Body = () => {
    const [postList, setPostList] = useState([]);
    return (
        <div>
            <AddPost setPostList={setPostList} postList={postList} />
            {postList
                .map(post => 
                    <Post post={post} />
                    )
            }
        </div>
    )
}

export default Body