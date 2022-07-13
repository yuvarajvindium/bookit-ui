import React from 'react';
import PropTypes from 'prop-types';
import './Signin.scss';
import { useState } from 'react';
import toastr from 'toastr';

const Signin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignIn = (e) => {
    e.preventDefault();
    const emailFormat = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (password.trim().length === 0) {
      toastr.error('password can not be blank')
    }
    if (email.trim().length === 0) {
      toastr.error('Email can not be blank')
    }
    if (email.trim().length !== 0 && (email.match(emailFormat) === null)) {
      toastr.error('Invalid Email format')
    }
    if (email.trim().length !== 0 && email.match(emailFormat) !== null && password.trim().length !== 0) {
      toastr.success('User has been logged-in successfully')
    }
  }

  return(
    <div className="Signin" >
      <h3 className='signInBookIt'>BOOKIT</h3>
      <form className='signInForm'>
        <h5 className='signInText'>SIGN IN</h5>
        <div className="mb-3">
          <label className='emailLabel'>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            onChange={e => { setEmail(e.target.value) }}
          />
        </div>
        <div className="mb-3">
          <label className='passwordLable'>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            onChange={e => { setPassword(e.target.value) }}
          />
        </div>
        <p className="forgotPassword">
          <a href='#'>Forgot password</a>
        </p>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary signInButton" onClick={handleSignIn}>
            Sign-in
          </button>
        </div>
        <p className="signUpLink">
          <a href='#'>Sign-up</a>
        </p>
      </form>
    </div>
  )
};

Signin.propTypes = {};

Signin.defaultProps = {};

export default Signin;
