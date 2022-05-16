import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../actions/auth';
import { useNavigate } from 'react-router-dom';
import { validation  } from './validation';
import axios from 'axios';

const Signup = ({signup, isAuthenticated}) => {
    const [accountCreated, setAccountCreated] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        re_password: ''
    });

    const [errors, setErrors] = useState({})
    const [error, setError] = useState([])

    const { name, email, password, re_password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        setErrors(validation(formData))
        if (password === re_password) {
        signup(name, email, password, re_password);
        setAccountCreated(true)
        } else {
            setError("Passwords Do Not Match!")
        }
    };
    const navigateTo = useNavigate();

    if (isAuthenticated) {
        navigateTo('/')    
    }

    if(accountCreated) {
       navigateTo('/login')
    } 

    return (
        <div className='container mt-5'>
            <h1>Do you love to Chat?</h1>
            <h3>Create your Account, and join the discussion!</h3>
            {error}
            <form onSubmit={e => onSubmit(e)}>
            <div className='form-group'>
                    <input
                        className='form-control'
                        type='name'
                        placeholder='Name'
                        required
                        name='name'
                        value={formData.name}
                        onChange={e => onChange(e)}
                    />
                    {errors.name && <p className='error'>{errors.name}</p>}
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='email'
                        placeholder='Email'
                        name='email'
                        required
                        value={formData.email}
                        onChange={e => onChange(e)}
                    />
                   {errors.email && <p className='error'>{errors.email}</p>}
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Password'
                        name='password'
                        required
                        value={formData.password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                    {errors.password && <p className='error'>{errors.password}</p>}
                </div>
                <div className='form-group'>
                    <input
                        className='form-control'
                        type='password'
                        placeholder='Confirm Password'
                        name='re_password'
                        required
                        value={formData.re_password}
                        onChange={e => onChange(e)}
                        minLength='6'
                    />
                    {errors.re_password && <p className='error'>{errors.re_password}</p>}
                </div>
                <button className='btn btn-primary' type='submit'>Register</button>
            </form>
        
            <p className='mt-3'>
                Already have an account? <Link to='/login'>Log In</Link>
            </p>
            <p className='mt-3'>
                Want to view the discussion? <Link to='/comment'>View Discussion</Link>
            </p>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { signup })(Signup);
