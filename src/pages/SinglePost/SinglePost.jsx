import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import axios from "axios"

export default function SinglePost() {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => setPost(response.data))
    }, [id])

    const deletePost = () => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => {console.log(res.data)})
            .catch(error => console.error(error))
    }

    return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <h3>{post.title} ID {id} </h3>
            <p>{post.body}</p>
            <button onClick={deletePost}>Delete</button>
        </div>
    )
}


// CRUD
// C = Create - создаем новый пост                                      POST
// R = Read - получаем данные об нескольких постах об одном посте       GET
// U = Update - зменить пост                                            GET
// D = Delete - удалить пост                                            PUT, PATCH, DELETE