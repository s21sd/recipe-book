import React, { useState } from 'react'

const Login = () => {
    const [apires, setapires] = useState("No res");
    const [login, setLogin] = useState(
        {
            password: '',
            email: '',
        }
    );
    const apiFetch = () => {
        fetch("http://localhost:8000/", {
            method: 'GET',
        })
            .then(res => res.json())
            .then(res => {
                setapires(res.message);
            })
    }
    const handleLogin = () => {
        fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                alert("Login Successfull");
            })
            .catch(err =>
                console.log(err));
    }
    React.useEffect(() => {
        apiFetch();
    }, [])
    return (
        <div className='signup'>
            <h1>Login to Your Account</h1>

            <div className='form'>
                <input onChange={(e) => { setLogin({ ...login, email: e.target.value }) }} type='text' placeholder='Enter your email' />
                <input onChange={(e) => { setLogin({ ...login, password: e.target.value }) }} type='text' placeholder='Enter your password' />
                <button onClick={handleLogin}>Login</button>

            </div>
        </div>
    )
}

export default Login