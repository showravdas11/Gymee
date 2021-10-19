import React from 'react';
import './Gallery.css'

const Gallery = () => {
    return (
        <div>
            <h1 className="text-center gallery">Our Gallery</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 gallery-img">
                        <img src="https://themecrazy.net/html/fitness-center/gym-preview/img/courses/1.jpg" alt="" />
                    </div>
                    <div className="col-md-6 gallery-img">
                        <img src="https://themecrazy.net/html/fitness-center/gym-preview/img/courses/2.jpg" alt="" />
                    </div>
                    <div className="col-md-6 gallery-img">
                        <img src="https://themecrazy.net/html/fitness-center/gym-preview/img/courses/3.jpg" alt="" />
                    </div>
                    <div className="col-md-6 gallery-img">
                        <img src="https://themecrazy.net/html/fitness-center/gym-preview/img/courses/4.jpg" alt="" />
                    </div>
                    <div className="col-md-6 gallery-img">
                        <img src="https://themecrazy.net/html/fitness-center/gym-preview/img/courses/5.jpg" alt="" />
                    </div>
                    <div className="col-md-6 gallery-img">
                        <img src="https://themecrazy.net/html/fitness-center/gym-preview/img/courses/6.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;