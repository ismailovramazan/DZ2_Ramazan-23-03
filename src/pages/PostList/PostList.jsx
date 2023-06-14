import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import '../../App.css'

export default function PostList () {
    const [posts, setPosts] = useState([])
    const [offset, setOffSet] = useState(0)

    const handlePrev = () => {
        if (offset > 0) {
            setOffSet(offset => offset - 10)
        }
    }

    const handleNext = () => {
        if (offset < 100) {
            setOffSet(offset => offset + 10)
        }
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts?_start=${offset}&_limit=10`)
            .then(response => setPosts(response.data))
    }, [offset])

    console.log(posts)
    console.log(offset)

    return (
        <div><h4>Posts</h4>

            <div className={'paginationBtns'}>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>

            <ul className={'ull'}>{posts.map( p =>
                <li key={p.id}>
                    <Link to={`${p.id}`}>
                        {p.title}
                    </Link>
                </li>)}
            </ul>

            <Link to={`/create`}><p>Create Post</p></Link>

            <div className={'paginationBtns'}>
                <button onClick={handlePrev}>Prev</button>
                <button onClick={handleNext}>Next</button>
            </div>
        </div>
    )
}