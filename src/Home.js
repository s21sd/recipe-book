import React from 'react'
import { ReactDOM } from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Routes } from "react-router-dom"
import Header from './Header'
import Second from './Second'
import Third from './Third'
import Four from './Four'
import Fifth from './Fifth'
import SignUp from './SignUp'
import Login from './Login'

const Home = () => {
    return (
        <>
            <Second />
            <Third />
        </>

    )
}

export default Home