import React, {useState} from 'react'
import {useNavigate} from "react-router-dom";

function LoginPage() {
    const [userName, setUserName] = useState('')
    const navigate = useNavigate()

    const submitForm = e => {
        e.preventDefault()

        navigate('/profile', {state: userName})
    }

    return (
        <>
            <div>Login Page</div>
            <form onSubmit={submitForm}>
                <input
                    type="text"
                    placeholder='username'
                    onChange={e => setUserName(e.target.value)}
                />
                <input id={''} type="password" placeholder='**********'/>
                <button type={"submit"}>ENTER</button>
            </form>
        </>
    )
}

export default LoginPage