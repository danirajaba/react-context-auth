import React from 'react'
import { useAuthDispatcher } from '../store/actions/useAuthDispatcher';

const Home = () => {

    const { logout } = useAuthDispatcher()

    const handlelogout = () => {
        logout()
    }

    return (
        <div>
            <h1>Home page</h1>
            <button onClick={handlelogout}>Logout</button>
        </div>
    )
}

export default Home;