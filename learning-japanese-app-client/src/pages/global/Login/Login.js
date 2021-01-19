import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SpinnerLoader from "../../../components/ui/SpinnerLoader/SpinnerLoader";
import { authUser } from "../../../store/actions/auth/auth";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputs;

  const onChange = (e) =>
    setInputs({ ...inputs, [e.target.name]: e.target.value });

  const onSubmitForm = (e) => {
    e.preventDefault();
    dispatch(authUser(inputs));
  };

  return (
    <div
      className='form-w-500 mx-auto login-form'
      style={{
        paddingTop: "50px",
      }}
    >
      <h2 className='my-4 text-center'>
        JLMS _ Japanese Learning Management System
      </h2>
      <div className='mb-5 shadow p-3 pb-5 pt-0 rounded bg-white'>
        <h1 className='my-4 text-center'>Login</h1>
        {loading && <SpinnerLoader />}
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        <form onSubmit={onSubmitForm}>
          <input
            type='text'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
            className='form-control form-control-lg my-3 mb-4'
            placeholder='Enter your email'
          />
          <input
            type='password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            className='form-control form-control-lg my-3 mb-4'
            placeholder='Enter password'
          />
          <button className='btn btn-info btn-lg btn-block'>Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
