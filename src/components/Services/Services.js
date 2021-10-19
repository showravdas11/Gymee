import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {

    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div className="container mt-5">

            <h2 className="text-center mt-5">Our Sevices</h2>

            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    services.map(service => <Service
                        key={service.name}
                        service={service}
                    ></Service>)
                }
            </div>


        </div>
    );
};

export default Services;