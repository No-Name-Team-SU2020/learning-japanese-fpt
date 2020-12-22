import React from "react";
import { GoogleLogin } from "react-google-login";
import { useDispatch } from "react-redux";
import { alert } from "../../../store/actions/ui/ui";

const LoginWithGoogle = () => {
  const dispatch = useDispatch();

  const responseGoogleSuccess = (response) => {
    dispatch(alert("success", "Login With Google success !"));
    console.log(response);
  };
  const responseGoogleFailed = (response) => {
    dispatch(alert("danger", "Login With Google Failed. Please try again!"));
    console.log(response);
  };
  return (
    <div className='mx-auto mt-3 w-50'>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID}
        buttonText='Login With Google'
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailed}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginWithGoogle;
