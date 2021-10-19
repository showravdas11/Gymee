import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./signIn.css"

const SignIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const auth = getAuth();

    const { user, signInUsingGoogle, } = useAuth();


    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }



    const handleRegistration = e => {
        e.preventDefault()
        console.log(email, password);
        if (password.length < 6) {
            setError('Password should be at least 6 characters ')
            return
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user);
                setError('')
            })

            .catch(error => {
                setError(error.massage)
            })


    }

    return (
        <div className="signin">
            <div>
                <form onSubmit={handleRegistration}>
                    <h1 className="mt-5">Please sign in</h1>
                    <input onBlur={handleEmailChange} type="email" name="" id="" placeholder="Email" required />
                    <br />
                    <input onBlur={handlePasswordChange} type="password" name="" id="" placeholder="Password" required />
                    <br />
                    <div className="text-center text-danger">{error}</div>
                    <br />
                    <button className='sign'>Sign In</button>
                    <br />
                    <Link to="/signup">Need an account ?</Link>
                    <br />
                </form>
                <button onClick={signInUsingGoogle} className="mt-5 google-btn">Google Sign In</button>
            </div>
        </div>
    );
};

export default SignIn;