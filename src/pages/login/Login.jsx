import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import decodeJWT from '../../decode/decodeJWT';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();
  
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
  
      toast.success('Login successful!');
      localStorage.setItem('token', res.data.token);
      const decodedToken = decodeJWT(res.data.token);
  
      setTimeout(() => {
        if (decodedToken.role === 'Admin') {
          navigate('/');
        } else {
          navigate('/');
        }
      }, 1000);
    } catch (err) {
      toast.error(err.response?.data?.message || 'Invalid email or password');
    }
  };
  

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <section className='login-section'>
        <div className='login-section-card'>
          <div className='login-section-card-left'>
            <h1 className='login-section-card-left-heading'>LOGIN</h1>
            <p style={{ fontSize: '15px', fontWeight: '400', textShadow: '1px 1px 20px black', marginTop: '2rem' }}>
              Login into the world of STUFER again
            </p>
            <span className='login-section-card-left-span'>Don't have an Account?</span>
            <Link to='/register'>
              <Button variant='outline-light'>Register</Button>
            </Link>
          </div>

          <div className='login-section-card-right'>
            <h1 className='login-section-card-right-heading'>Login</h1>

            <form className='login-section-card-right-form' onSubmit={loginUser}>
              <input
                className='login-section-card-right-form-input text-dark'
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className='login-section-card-right-form-input text-dark'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant='outline-light' type='submit'>
                Login
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
