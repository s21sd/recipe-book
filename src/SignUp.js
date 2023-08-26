import React from 'react'
import { useEffect, useState } from 'react';
const SignUp = () => {
    const [apires, setapires] = useState("No res");
    const [register, setRegister] = useState(
        {
            name: '',
            email: '',
            password: '',

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
    const handleSignUp = () => {
        fetch("http://localhost:8000/register", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(register)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message)
            })
            .catch((console.error()))
    }
    useEffect(() => {
        apiFetch();
    }, [])
    return (

        <div className='signup'>
            <h1>Create Your Account</h1>
            <div className='form'>
                <input onChange={(e) => { setRegister({ ...register, name: e.target.value }) }} type='text' placeholder='Enter your name' />
                <input onChange={(e) => { setRegister({ ...register, email: e.target.value }) }} type='text' placeholder='Enter your email' />
                <input onChange={(e) => { setRegister({ ...register, password: e.target.value }) }} type='text' placeholder='Enter your password' />
                <button onClick={handleSignUp}>SignUp</button>

            </div>
        </div>

    )
}

export default SignUp