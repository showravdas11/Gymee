import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/R2kBgqq/11.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <div className="pass">
                            <h1>Making Different From Other Builds Perferct Health</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className=" w-100 h-50"
                        src="https://i.ibb.co/4KyJtYR/12.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>

                        <div className="pass">
                            <h1>Look In The Mirror Thats Your competition</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://i.ibb.co/ctKm1ns/13.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <div className="pass">
                            <h1>BeLive In YourSelf</h1>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;