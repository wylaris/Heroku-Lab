import React, { Component } from 'react';
import image from './Malachowsky.png';
import triangle from './project-triangle-quality.jpg';
import './App.css';

class App extends Component {

  componentDidMount() {
    setInterval(this.makeAppear, 15000);
    setInterval(this.makeDisappear, 20000);
  }

  makeAppear = () => {
    console.log("Appearing")
    let triangle = document.getElementById("triangle");
    triangle.style.visibility = "visible"
  }

  makeDisappear = () => {
    console.log("Hiding")
    let triangle = document.getElementById("triangle");
    triangle.style.visibility = "hidden"
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="http://www.se.rit.edu/~samvse/" target="blank">
            <img src={image} className="App-logo" alt="logo" />
          </a>
          <p>
            Devops
          </p>
          <a
            href="https://www.amazon.com/Project-Leadership-Communication-Samuel-Malachowsky/dp/1732378908/ref=sr_1_1?keywords=malachowsky+book&qid=1580486292&sr=8-1"
            target="blank"
          >
            Buy My Book
          </a>
          <img src={triangle} className="App-triangle" id="triangle" alt="triangle" />
        </header>
      </div>
    );
  }
}

export default App;
