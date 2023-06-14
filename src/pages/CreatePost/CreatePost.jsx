import React, { useState } from 'react'
import '../../App.css'

export default function CreatePost () {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault()

        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST', body: JSON.stringify({ title, body }),
            headers: {'Content-type': 'application/json'}
        })

        const data = await response.json()
        console.log(data)
        setTitle('')
        setBody('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className='newpost'>
                <label>Title:</label>
                <input type='text' value={title} onChange={(event) => setTitle(event.target.value)} />
            </div>
            <div className='newpost'>
                <label>Body:</label>
                <input value={body} onChange={(event) => setBody(event.target.value)} />
            </div>
            <button type='submit'>Create Post</button>
        </form>
    )
}