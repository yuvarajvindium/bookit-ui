import React from 'react';
import './Forgotpassword.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Forgotpassword = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({ error: 'No value' });
  const paraText = `Enter your email address, and we'll send you a link to reset your password.`;

  const validateForm = (values) => {
    const error = {};
    const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!values.email) {
      error.email = 'Email is a required field';
    }
    if (!emailRegex.test(values.email)) {
      error.email = 'Enter a valid email ';
    }
    return error;
  }

  const handleChange = ({ target: { name, value } }) => {
    let updateValues = { ...values, [name]: value }
    setValues(updateValues);
    setErrors(validateForm(updateValues));
  }

  const handleSubmit = (e) => {
    console.log(errors);
    e.preventDefault();

  }

  return <div className="mt-3">
    <p className="text-center p-color ">{paraText}</p>
    <form className="form-container" onSubmit={handleSubmit}>
      <input type="text" className="form-control input-form" name="email" placeholder="Email"
        onChange={handleChange} />
      {errors.email && <span className="text-danger">{errors.email}</span>}
      <section className="d-grid gap-2">
        <button type="submit" className="btn btn-color forgot-button" disabled={Object.values(errors).some(v => v)}>Send Link</button>
      </section>
      <div className="row">
        <div className="col-5 line"></div>
        <div className="col-2 text-center"> OR </div>
        <div className="col-5 line"></div>

      </div>
      <Link to='/signin' className="link-area"><p className="mt-3 back-login-p" >Back to Login  </p></Link>
    </form>
  </div>
}

Forgotpassword.propTypes = {};

Forgotpassword.defaultProps = {};

export default Forgotpassword;
