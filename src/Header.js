import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
    const inputRef = useRef();
    // const [data, setData] = useState('');
    const navigate = useNavigate();
    const seachVal = (e) => {
        // console.log("Working")
        e.preventDefault();
       
        navigate.apply(`/menu?search=${inputRef.current.value}`);
    }
    return (
        <div className='header-sec'>
            <h1>FOOD<span style={{
                color: '#32b768',
                fontWeight: '700'
            }}>MOOD</span></h1>
            <div>
                <ul className='unoderlist'>
                    <li><Link style={{ textDecoration: 'none', color: 'black' }} to="/">Home</Link></li>
                    <li>About</li>
                    <li>Recipes</li>
                    <li><Link className='login' to="/login">Login</Link></li>
                    <li><Link className='login' to="/signup">Sign Up</Link> </li>

                </ul>
            </div>
            <div className='input-div'>
                <input ref={inputRef} type='text' className='inputtag' placeholder='Search' />
                <FontAwesomeIcon onClick={seachVal} className='seach-icon' icon={faSearch} style={{ color: "#050505" }} />
            </div>

        </div>
    )
}

export default Header