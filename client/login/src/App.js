import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import FPT from '../src/img/FPT.png'
import Japan from '../src/img/Japan.jpg'
import Login from "./components/login.component";


function App() {
    return ( < Router >
        <
        div className = "App" >
        <
        nav className = "navbar navbar-expand-lg navbar-light fixed-top" >
        <
        div className = "container" >
        <
        img src = { FPT }
        className = "login100-more"
        alt = "FAIL TO LOAD" > < /img> { /* <Link className="navbar-brand" to={"/sign-in"}>FPT</Link> */ } <
        div className = "collapse navbar-collapse"
        id = "navbarTogglerDemo02" >
        <
        ul className = "navbar-nav ml-auto" >
        <
        li className = "nav-item" >
        <
        Link className = "nav-link"
        to = { "/sign-in" } > Trang Chủ < /Link> <
        /li> <
        /ul> <
        /div> <
        /div> <
        /nav> <
        div className = "auth-wrapper" >
        <
        div className = "auth-inner"
        style = {
            { width: "60%", float: "left", padding: "0" } } > {
            /* <div style={{ float :"left", border: "10px solid green", backgroundImage: "url(" + Japan + ")" }} className="">
                    </div> */
        } <
        img src = { Japan }
        alt = "FAIL TO LOAD"
        style = {
            { height: "100%", width: "100%", borderRadius: "inherit" } } > < /img> <
        /div> <
        div className = "auth-inner"
        style = {
            { width: "39%", float: "right" } } >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Login }
        /> <
        Route path = "/sign-in"
        component = { Login }
        /> { /* <Route path="/sign-up" component={SignUp} /> */ } <
        /Switch> <
        /div> <
        /div> <
        /div></Router >
    );
}

export default App;