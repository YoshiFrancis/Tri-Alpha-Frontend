import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/posts'

const getAll = async () => {
    let posts = await axios.get(baseUrl)
    console.log(posts)
    return posts.data
}

const create = async (post) => {
    console.log(post.image)
    post = {
        "topic": post.topic,
        "username": post.username,
        "info": post.info,
        "image": post.image
    }
    let createdPost = await axios.post(baseUrl, post)
    console.log("this is the created post", createdPost.data)
    return createdPost.data.id
}

const remove = async (id) => {
    await axios.delete(`${baseUrl}/${id}`)
}
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getAll, create, remove
}