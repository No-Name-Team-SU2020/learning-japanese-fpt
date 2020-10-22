import React, { Component } from 'react';
import { userLoginFetch } from '../src/components/action.js';
import { connect } from 'react-redux'
import Japan from '../../src/img/Japan.jpg';
export default class Login extends Component {
    state = {
        loading: true,
        username: "",
        password: ""
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault()
        this.props.userLoginFetch(this.state)
    }

    // async componentDidMount(){
    //     const url = "";
    //     const responese = await fetch(url);
    //     const data = await responese.json();
    //     this.setState({person: data.results[0] });
    //     console.log(data);
    // }

    render() {
        return ( <
            div >
            <
            form onSubmit = { this.handleSubmit } >
            <
            h3 > Đăng nhập < /h3> <
            div className = "form-group" >
            <
            label > Email < /label> <
            input type = "email"
            className = "form-control"
            placeholder = "Enter email"
            value = { this.state.username }
            onChange = "this.handleChange" / >
            <
            /div> <
            div className = "form-group" >
            <
            label > Mật Khẩu < /label> <
            input type = "password"
            className = "form-control"
            placeholder = "Enter password"
            value = { this.state.password }
            onChange = "this.handleChange" / >
            <
            /div>  <
            div className = "container-login100-form-btn" >
            <
            button type = "submit"
            className = "login100-form-btn" >
            Đăng nhập <
            /button> <
            /div> <
            /form> <
            /div>
        );
    }
}
const mapDispatchToProps = dispatch => ({
    userLoginFetch: userInfo => dispatch(userLoginFetch(userInfo))
})

export default connect(null, mapDispatchToProps)(Login);