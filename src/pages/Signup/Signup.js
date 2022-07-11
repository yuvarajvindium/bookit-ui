import React from 'react';
// import PropTypes from 'prop-types';
import './Signup.scss';
import validateForm from '../../services/Validation';
import { useState } from 'react';
import { Button } from "react-bootstrap";

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

  return <div className="Form container-fluid">
    <section className="row form-row justify-content-center ">
      <section className="col-12 col-sm-4 col-md-4 form-main-page">

        <h1 className="text-center form-header mt-5"> Bookit</h1>
        <form className="form-container mt-2" onSubmit={handleSubmit}>
          <h3 className="signup-text">Sign up</h3>
          <label className="mt-3 label-text">Name</label>
          <input type="text" className="form-control input-form" name="name" onChange={handleChange} />
          {errors.name && <span className="text-danger">{errors.name}</span>}<br />
          <label className="label-text">Email</label>
          <input type="text" className="form-control input-form" name="email" onChange={handleChange} />
          {errors.email && <span className="text-danger">{errors.email}</span>}<br />
          <label className="label-text" >Password</label>
          <input type="password" className="form-control input-form" name="password" onChange={handleChange} />
          {errors.password && <span className="text-danger">{errors.password}</span>}<br />
          <section className="d-grid gap-2">
            <Button type="submit" className="btn btn-color"
              disabled={Object.values(errors).some(v => v)}>Sign up</Button>
          </section>
          <section>
            <p className="text-center mt-3 p-color">By signing up you agree to our <br />Terms & Condition</p>
          </section>
        </form>  </section>
    </section>
  </div>
};

Signup.propTypes = {};

Signup.defaultProps = {};

export default Signup;
