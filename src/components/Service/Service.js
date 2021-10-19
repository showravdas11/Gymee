
// import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, time, description, img, id } = service;
    return (
        <>
            <div className="col">
                <div className="card h-100">
                    <img src={img} classNameNmae="card-img-top" alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{name}</h4>
                        <h6>{time}</h6>
                        <p className="card-text">{description}</p>
                        <Link to={`/booking/${id}`}>
                            <button className="see-btn">See More</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;