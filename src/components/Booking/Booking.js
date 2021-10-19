import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Booking.css'

const Booking = () => {
    const { serviceId } = useParams();
    const [single, setSingle] = useState({})

    useEffect(() => {
        fetch('https://api.jsonbin.io/b/616f07649548541c29c57c0f')
            .then(res => res.json())
            .then(data => {
                const s = data?.find(i => i.id == serviceId)
                setSingle(s)
            })
    }, [serviceId])
    console.log(single);
    return (
        <div>
            <div className="container ">
                <div className="row sevice-detail">
                    <div className="col-md-6">
                        <img src={single.img} alt="" />
                        <h4>{single.name}</h4>
                        <p>{single.description}</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Booking;