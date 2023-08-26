import React from 'react'
import phone from './img/phone.jpg'
const Fifth = () => {
    return (
        <div className='fifth-div'>
            <div>
                <img src={phone} alt='phone-img' />
            </div>
            <div className='fifth-div2'>
                <button>Download app</button>
                <h1>Get the app</h1>
                <p>Our app is available on the App Store and<br></br> Play Store,you can download for free for a<br></br>more comfortable experience</p>
                <div className='btn-div'>
                    <button>App Store</button>
                    <button>Play Store</button>
                </div>
            </div>
        </div>
    )
}

export default Fifth