import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import './Signup.scss';
import validateForm from '../../services/Validation';
import { Button } from "react-bootstrap";

const Signup = () => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({ error: 'No value' });

  const handleChange = ({ target: { name, value } }) => {
    let updateValues = { ...values, [name]: value }
    setValues(updateValues);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(values));
    if (!Object.values(validateForm(values)).some(v => v)) {
      console.log('signed Up')
    }

  }

  return <div className="Form container-fluid">
    <section className="row form-row justify-content-center ">
      <section className="col-12 col-sm-6 col-md-5 form-main-page">
        <h1 className="text-center form-header"> Bookit</h1>
        <form className="form-container " onSubmit={handleSubmit}>
          <h3 className="signup-text">Sign up</h3>
          <label className="label-text mt-3">Name</label>
          <input type="text" className="form-control input-form" name="name" onChange={handleChange} />
          {errors.name && <span className="mt-1 mb-2 text-danger">{errors.name}</span>}<br />
          <label className="label-text">Email</label>
          <input type="text" className="form-control input-form" name="email" onChange={handleChange} />
          {errors.email && <span className="mt-1 mb-2 text-danger">{errors.email}</span>}<br />
          <label className="label-text" >Password</label>
          <input type="password" className="form-control input-form" name="password" onChange={handleChange} />
          {errors.password && <span className=" mt-1 mb-2 text-danger">{errors.password}</span>}<br />
          <section className="d-grid gap-2">
            <Button type="submit" className="btn btn-color">Sign up</Button>
          </section>
          <section>
            <p className="text-center mt-3 p-area">By signing up you agree to our Terms & Condition</p>
          </section>
        </form>  </section>
    </section>
  </div>
};

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
