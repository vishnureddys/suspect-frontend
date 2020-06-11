import React, { Component } from "react";
import Header from "../components/Header";
import Suspects from "../components/ListPosts";

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Suspects />
            </div>

        );
    }
}
