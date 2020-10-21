import React, { Component } from "react";

import Japan from '../../src/img/Japan.jpg';
export default class Login extends Component {
    state = {
        loading: true,
        person: null,
        username: "",
        password: ""
    };
    async componentDidMount() {
        const url = "";
        const responese = await fetch(url);
        const data = await responese.json();
        this.setState({ person: data.results[0] });
        console.log(data);
    }
    render() {
        return ( <
            div > {
                this.state.loading || !this.state.loading ? ( <
                    div > Loading... < /div>
                ) : ( <
                    form >
                    <
                    h3 > Đăng nhập < /h3> <
                    div className = "form-group" >
                    <
                    label > Email < /label> <
                    input type = "email"
                    className = "form-control"
                    placeholder = "Enter email"
                    value = { this.state. }
                    /> <
                    /div>


                    <
                    div className = "form-group" >
                    <
                    label > Mật Khẩu < /label> <
                    input type = "password"
                    className = "form-control"
                    placeholder = "Enter password" / >
                    <
                    /div>  <
                    div className = "container-login100-form-btn" >
                    <
                    button type = "submit"
                    className = "login100-form-btn" >
                    Đăng nhập <
                    /button> <
                    /div> { /* <button type="submit" className="btn-signin">Đăng nhập</button> */ } <
                    p className = "forgot-password text-right" >
                    Quên < a href = "#" > mật khẩu ? < /a> <
                    /p> <
                    /form>
                )
            } <
            /div>
        );
    }
}