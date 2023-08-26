import React from 'react'
import img1 from './img/img1.jpg'
import img2 from './img/img2.jpg'
import img3 from './img/img3.jpg'
import img4 from './img/img4.jpg'
import img5 from './img/img5.jpg'
import img6 from './img/img6.jpg'
import img7 from './img/img7.jpg'
import img8 from './img/img8.jpg'
const Third = () => {
    return (
        <div  className='third-div'>
            <div className='th1'>
                <h1>
                    Popular Food
                </h1>
                <p>we provide a variety of food and beverage recipes <br></br>with high taste from famous chefs</p>
            </div>

            <div className='th2'>
                <div className='th2-div1'>
                    <img src={img1} alt='img1' />
                    <img src={img2} alt='img1' />
                    <img src={img3} alt='img1' />
                    <img src={img4} alt='img1' />
                    <img src={img5} alt='img1' />
                </div>
                <div className='th2-div1'>
                    <img src={img6} alt='img1' />
                    <img src={img7} alt='img1' />
                    <img src={img8} alt='img1' />
                    <img src={img1} alt='img1' />
                </div>
            </div>
        </div>
    )
}

export default Third