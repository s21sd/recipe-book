import React from 'react'
import Carousel from "react-multi-carousel";
import { useLocation } from 'react-router-dom'
import "react-multi-carousel/lib/styles.css";
import fburger from './img/fburger.avif'
import Fifth from './Fifth';
const responsive = {
    superLargeDesktop: {

        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const Four = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('search');
    return (
        <div className='four-div'>
        {console.log(searchTerm)}
            <h1>{searchTerm}</h1>
            <Carousel responsive={responsive}>

                <div className='div-1'>
                    <div>
                        <h1>Chiken Burger</h1>
                        <p>Buffalo Chicken Grilled Cheese Sandwich<br></br>orem Ipsum is simply dummy text of the printing and <br></br>typesetting industry. <br></br>Lorem Ipsum has been the industry's standard <br></br>dummy text ever since the 1500s</p>
                        <a href='http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html'>Linked</a>
                    </div>
                    <img className='f-burger' src={fburger} alt='img-1' />
                </div>

                <div className='div-1'>
                    <div>
                        <h1>Chiken Burger</h1>
                        <p>Buffalo Chicken Grilled Cheese Sandwich</p>
                        <a href='http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html'>Linked</a>
                    </div>
                    <img className='f-burger' src={fburger} alt='img-1' />
                </div>

                <div className='div-1'>
                    <div>
                        <h1>Chiken Burger</h1>
                        <p>Buffalo Chicken Grilled Cheese Sandwich</p>
                        <a href='http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html'>Linked</a>
                    </div>
                    <img className='f-burger' src={fburger} alt='img-1' />
                </div>

                <div className='div-1'>
                    <div>
                        <h1>Chiken Burger</h1>
                        <p>Buffalo Chicken Grilled Cheese Sandwich</p>
                        <a href='http://www.closetcooking.com/2011/08/buffalo-chicken-grilled-cheese-sandwich.html'>Linked</a>
                    </div>
                    <img className='f-burger' src={fburger} alt='img-1' />
                </div>

            </Carousel>

            <Fifth />
        </div>
    )
}

export default Four