import Post from "./Post/Post";
import AddPost from "./AddPost/AddPost";


import { useEffect, useState } from "react";

const Body = ({postService}) => {
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

      const addPost = async (newPost) => {
        await postService.create(newPost)
        let newPostList = await postService.getAll()
        setPostList(newPostList)
      }

    return (
        <div>
            <AddPost addPost={addPost}/>
            {postList
                .map((post) => 
                    <Post removePost={removePost} post={post} key={post.id}/>
                    )
            }
        </div>
    )
}

export default Body