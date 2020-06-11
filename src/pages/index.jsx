import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootStrap from "react-bootstrap";
import blrlogo1 from "../blrlogo.png";
import blrlogo2 from "../blrlogo2.png";
import React, { Component } from "react";
import Header from "../components/Header";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <h1>Welcome to the Suspect Detection Portal</h1>
                <big>This is a feature currently under development wherein citizens can report suspects anonymously.</big>
                <p>Please <a href="http://127.0.0.1:8000/register/" >register</a> if you wish to report a crime.</p>
                <p>Please <a href="http://127.0.0.1:8000/login/">login</a> if you already have an account.</p>
            </div>

        );
    }
}
