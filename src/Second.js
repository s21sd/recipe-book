import React from 'react'
import plate from './img/plate.jpeg'
import burger from './img/burger.jpeg'
import salad from './img/salad.jpeg'
import { Link } from 'react-router-dom'
// import { BrowserRouter, Router, Route, Link } from 'react-router-dom'
const Second = () => {
    return (

        <div className='second-div'>
            <div className='fir-div'>
                <h1>
                    Let's Start <br></br>Cooking With <br></br>Popular Recipes
                </h1>
                <p>Want to learn cook but confused how to start?<br></br>
                    No need to worry again</p>
                <div>
                    <button className='btn-1'>Get Started</button>
                    <button className='btn-2'><Link style={{ textDecoration: 'none', color: 'black' }} to={'/menu'}>Explore Menu</Link></button>
                </div>
            </div>
            <div className='sec-div'>

                <img src={plate} alt='plate-back' />
            </div>
            <div className='burger-div'>
                <div>
                    <div className='bur-up'>
                        <img src={burger} alt='burger' className='imgs' />
                        <div className='bur'>
                            <h6>Fruit sandwich <br></br>🔥 5.93</h6>

                        </div>
                    </div>

                    <div>
                        Bread,Stawberry,Jam,<br></br>Blueberry,Orange,<br></br>Raspberry
                    </div>
                </div>
            </div>
            <div className='salad-div'>
                <div>
                    <div className='bur-up'>
                        <img src={salad} alt='salad' className='imgs' />
                        <div className='bur'>
                            <h6>Fruit salad <br></br>🔥 3.68</h6>
                        </div>
                    </div>

                    <div>
                        orange,Stawberry,Cerry,<br></br>Blueberry,Kiwi
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Second;