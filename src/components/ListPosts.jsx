import React, { Component } from "react";
import "../App.css";

class Suspects extends Component {
  state = {
    posts: [],
  };
  async componentDidMount() {
    try {
      const res = await fetch("http://127.0.0.1:8000/posts/"); // fetching the data from api, before the page loaded
      const posts = await res.json();
      this.setState({
        posts,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <div>
        <h1>List of Suspects</h1>
        <div className="row"></div>
        {this.state.posts.map((item) => (
          <div className="column">
            <h1>{item.title}</h1>
            <img src={item.cover} />
          </div>
        ))}
        <button className="button">
          <span>
            <a href="http://127.0.0.1:8000/suspectnumber/">
              Click here to enter the suspect number
            </a>
          </span>
        </button>
      </div>
    );
  }
}
export default Suspects;
