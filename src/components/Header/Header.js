import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid container">
                    <img src="https://i.ibb.co/wR3CqSx/logo-white.png" alt="" width="100" />
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
                        <Link className="me-4 item" to="/home">Home</Link>
                        <Link className="me-4 item" to="/about">About Us</Link>
                        <Link className="me-4 item" to="/gallery">Gallery</Link>
                        <span className="mx-2">{user.displayName}</span>

                        {
                            user.email ?
                                <button className="signIn-btn" onClick={logOut}>Log Out</button>
                                :
                                <Link to="/signin"><button className="signIn-btn">Sign In</button></Link>
                                }
                        {/* {
                            user.displayName ?
                                <button onClick={logOut}>Log Out</button>
                                :
                                <Link to="/signup"> <button className='mx-3'>Sign up</button></Link>} */}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;