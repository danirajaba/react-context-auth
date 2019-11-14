import React, { useRef } from 'react'
import { useAuthDispatcher } from '../store/actions/useAuthDispatcher';
import { useAuth } from '../store/states/useAuth';

const Login = () => {

    const username_ref = useRef('');
    const password_ref = useRef('');
    const { error } = useAuth();
    const { login } = useAuthDispatcher()


    console.log(error)

    const handlesubmmit = (event) => {

        event.preventDefault();
        const username = username_ref.current.value;
        const password = password_ref.current.value;
        login(username, password)
    }

    return (
        <div>
            <h1>Login</h1>
            {error ? <h2 style={{ color: 'red' }} >{error}</h2> : null}
            <form onSubmit={handlesubmmit}>
                <div>
                    <input placeholder="Enter username" name="username" type="text" ref={username_ref} />
                </div>
                <div>
                    <input placeholder="Enter password" name="password" type="password" ref={password_ref} />
                </div>
                <input type="submit" value="login" />
            </form>
        </div>
    )
}

export default Login;