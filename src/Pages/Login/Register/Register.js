import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate();
    const navigateLogin = () => {
        navigate('/login')
    }
    return (
        <div className='register-form'>
            <h2 style={{ textAlign: 'center' }}>Please Register</h2>
            <form>
                <input type="text" name="name" id="" placeholder='your name' />

                <input type="email" name="email" id="" placeholder='your email' required />

                <input type="password" name="password" id="" placeholder='your password' required />

                <input type="submit" value="Register" />
            </form>

            <p>Already have an account? <Link to='/login' className='text-danger pe-auto text-decoration-none' onClick={navigateLogin}>please Login</Link></p>
        </div>
    );
};

export default Register;