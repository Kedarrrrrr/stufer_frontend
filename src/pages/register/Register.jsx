import { Link, useNavigate } from 'react-router-dom';
import '../login/login.css';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const registerUser = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
      });

      toast.success(res.data.message || 'Registered successfully!');
      setUsername('');
      setEmail('');
      setPassword('');
      navigate('/login')
    } catch (err) {
      toast.error(err.response?.data?.message || 'This Email Already Registered');
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <section className='register-section'>
        <div className='register-section-card'>
          <div className='register-section-card-left'>
            <h1 className='register-section-card-left-heading'>Register</h1>
            <p style={{ fontSize: '15px', fontWeight: '200', textShadow: '1px 1px 20px black' }}>
              Register into the world of STUFER and get to know your college like never before.
              Get updates about events and explore various communities around the campus.
            </p>
            <span className='register-section-card-left-span'>Already have an account?</span>
            <Link to='/login'>
              <Button className='register-section-card-left-button' variant='outline-light'>
                Login
              </Button>
            </Link>
          </div>

          <div className='register-section-card-right'>
            <h1 className='register-section-card-right-heading'>Register</h1>

            <form className='register-section-card-right-form' onSubmit={registerUser}>
              <input
                className='register-section-card-right-form-input text-dark'
                type="text"
                placeholder='Username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />

              <input
                className='register-section-card-right-form-input text-dark'
                type="email"
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input
                className='register-section-card-right-form-input text-dark'
                type="password"
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button variant='outline-light' type='submit'>
                Register
              </Button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
