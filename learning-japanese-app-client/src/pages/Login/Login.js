import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Login = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = async (e) => {
    e.preventDefault();

  };

  return (
    <div className="form-w-500 mx-auto my-5 shadow p-3 rounded">
      <h1 className="mt-5 text-center">Login</h1>
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
        <button className="btn btn-info btn-block">Submit</button>
      </form>
      <p className="mt-3">
        Do not have an account ? <Link to="/register">Register</Link>
      </p>
      <p className="mt-3">
        Forgot password ? <Link to="/reset-password">Reset Password</Link>
      </p>
    </div>
  );
};

export default Login;
