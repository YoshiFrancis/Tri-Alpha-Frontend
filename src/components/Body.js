import Post from "./Post.js";
import { Link } from 'react-router-dom'

import postService from '../services/posts.js'
import { useEffect, useState } from "react";

const Body = () => {
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

export default Body