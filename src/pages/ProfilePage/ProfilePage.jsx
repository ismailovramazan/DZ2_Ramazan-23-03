import React from 'react'
import { useLocation } from "react-router-dom"

function ProfilePage() {
    const loc = useLocation()

    console.log(loc)
    return (
        <div>Profile Page {loc.username}</div>
    )
}

export default ProfilePage