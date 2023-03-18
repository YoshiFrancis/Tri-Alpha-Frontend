import Post from "../Post/Post.js";

import postService from '../../services/posts.js'
import { useEffect, useState } from "react";

const ViewBlogs = () => {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        postService.getAll().then(posts => {
            console.log(posts)
            setPostList(posts)
        })
      }, [])

      const removePost = async (id) => {
        await postService.remove(id)
        postService.getAll().then(posts => {
            setPostList(posts)
        })
      }

    return (
        <div>
            {postList
                .map((post) => 
                    <Post removePost={removePost} post={post} key={post.id}/>
                    )
            }
        </div>
    )
}

export default ViewBlogs