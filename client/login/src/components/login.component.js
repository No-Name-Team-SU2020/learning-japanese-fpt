import React, { Component } from "react";

import Japan from '../../src/img/Japan.jpg';
export default class Login extends Component {
    render() {
        return (
            <form>
                <h3>Đăng nhập</h3>
                <div className="form-group">
                    <label>Email </label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>
                {/* <div className="wrap-input100">
                    <input
                        className="input100"
                        type="text"
                        name="email"
                        maxLength="320"
                        required
                    />
                    {/* <span className="focus-input100"></span> */}
                {/* <span className="label-input100">Email</span>
                </div> */}

                 <div className="form-group">
                    <label>Mật Khẩu</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div> 
                {/* <div className="wrap-input100">
                    <input
                        className="input100"
                        type="text"
                        name="email"
                        maxLength="320"
                        required
                    />
                    <span className="focus-input100"></span>  */}
                {/* <span className="label-input100">Mat Khau</span>
                </div>  */}
                {/* <div className="form-group">
<div className="custom-control custom-checkbox">
    <input type="checkbox" className="custom-control-input" id="customCheck1" />
    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
</div>
</div> */}
                <div className="container-login100-form-btn">
                    <button type="submit" className="login100-form-btn">
                        Đăng nhập
            </button>
                </div>
                {/* <button type="submit" className="btn-signin">Đăng nhập</button> */}
                <p className="forgot-password text-right">
                    Quên <a href="#">mật khẩu?</a>
                </p>
            </form>
        );
    }
}
