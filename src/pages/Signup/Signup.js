import React from 'react';
// import PropTypes from 'prop-types';
import './Signup.scss';
import validateForm from './Validation';
import { useState } from 'react';

const Signup = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({ error: 'No value' });

  const handleChange = ({ target: { name, value } }) => {
    let updateValues = { ...values, [name]: value }
    setValues(updateValues);
    setErrors(validateForm(updateValues));
  }

  const handleSubmit = (e) => {
    console.log(errors);
    e.preventDefault();

  }

  return <form className="form-container mt-2" onSubmit={handleSubmit}>

    <input type="text" className="form-control input-form" name="name" placeholder="Your name" onChange={handleChange} />
    {errors.name && <span className="text-danger">{errors.name}</span>}

    <input type="text" className="form-control input-form" name="email" placeholder="Email" onChange={handleChange} />
    {errors.email && <span className="text-danger">{errors.email}</span>}

    <input type="password" className="form-control input-form" name="password" placeholder="Password" onChange={handleChange} />
    {errors.password && <span className="text-danger">{errors.password}</span>}

    <section className="d-grid gap-2">
      <button type="submit" className="btn btn-color"
        disabled={Object.values(errors).some(v => v)}>Sign up</button>
    </section>

    <section>
      <p className="text-center mt-3 p-color">By signing up you agree to our <br />Terms & Condition</p>
    </section>
  </form>
};

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
