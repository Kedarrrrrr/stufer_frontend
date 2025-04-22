import { Link } from 'react-router-dom';
import '../login/login.css';
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const registerUser = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    try {
      const res = await axios.post('http://localhost:5000/api/auth/register', {
        username,
        email,
        password
      });

      setSuccess(res.data.message || 'Registered successfully!');
      setUsername('');
      setEmail('');
      setPassword('');
    } catch (err) {
      setError(err.response?.data?.message || 'This Email Also Register');
    }
  };

  return (
    <>
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
              <button className='register-section-card-left-button'>Login</button>
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

              {error && <p className="error-message">{error}</p>}
              {success && <p className="success-message">{success}</p>}

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
