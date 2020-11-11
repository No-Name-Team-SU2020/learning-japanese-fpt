import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    password1: ""
  });

  const { email, password, password1 } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log(inputs);
  };

  return (
    <div className="form-w-500 mx-auto my-5 shadow p-3 rounded">
      <h1 className="mt-5 text-center">Register</h1>
      <form onSubmit={onSubmitForm}>
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => onChange(e)}
          className="form-control my-3"
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => onChange(e)}
          className="form-control my-3"
          placeholder="Enter password"
        />
        <input
          type="password"
          name="password1"
          value={password1}
          onChange={(e) => onChange(e)}
          className="form-control my-3"
          placeholder="Confirm password"
        />
        <button className="btn btn-info btn-block">Submit</button>
      </form>
      <p className="mt-3">
        Already have an account ? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
