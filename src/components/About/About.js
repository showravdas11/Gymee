import React from 'react';
import { Link } from 'react-router-dom';
import './About.css'

// https://i.ibb.co/8rWdjQk/breadcrumb-bg.jpg
// https://i.ibb.co/T1VbM4V/thumb-12.jpg
// https://i.ibb.co/dLVLvCV/thumb-13.jpg

const About = () => {
    return (
        <>
            <div className="about">
                <div className="about-text">
                    <h1 className="text-center">ABOUT US</h1>
                    <h1><Link className="about-item" to="/home">Home</Link> || About Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-5 welcome-text">
                        <h1>Welcome To Gymee An Exclusive Gymasian</h1>

                        <p>Sed ut perspiciatis unde omnis iste natu error sit volup tatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae abillo inventore ver

                            Laudantium totam rem aperiam eaque ipsa quae abillo inventore veritatis etse quasi archit beatae</p>
                    </div>
                    <div className="col-md-4 welcome-img">
                        <img src="https://i.ibb.co/T1VbM4V/thumb-12.jpg" alt="" />
                    </div>
                    <div className="col-md-3 welcome-img">
                        <img src="https://i.ibb.co/dLVLvCV/thumb-13.jpg" alt="" />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 gym-vdo">
                        <iframe width="500" height="300" src="https://www.youtube.com/embed/ZIKt1-r3PL0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="col-md-6 gym-text">
                        <h1>GYM Is Very Important For Our Health, Let’s See Inside Of GYM Center We Are So Trusted</h1>

                        <p>Avoids pleasure itsel because it is pleasure because those who do nknow how pursue pleasure rationally encounter consequences that are extremely painful.Nor again is there anyone who loves or pursues or desires to obtain pain of itself because it is pain.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;