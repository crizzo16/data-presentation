import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHippo,
  faBolt,
  faPen,
  faRocketLaunch,
} from "@fortawesome/free-solid-svg-icons";
import "../App.css";

class Animation extends Component {
  state = {
    current: [1, 1, 1],
    role: [
      "a coder",
      "a dungeon master",
      "an analyst",
      "a friend",
      "a board game geek",
      "an avid learner",
    ],
    work: [
      "spreadsheets",
      "clean code",
      "working in a team",
      "learning new coding languages",
      "implementing designs",
      "starting new projects",
      "editing my portfolio",
      "learning new techniques",
    ],
    fun: [
      "sweet potatoes",
      "cooperative board games",
      "the MCU",
      "Dungeons & Dragons",
      "coconut LaCroix with fresh lime and ice",
      "renaissance faires",
      "dragons (who doesn't)",
      "sewing",
      "playing video games",
      "my sister's art (@its_an_artiful_world on Instagram)",
    ],
  };

  handleClick = (event) => {
    event.preventDefault();

    const roleNum = Math.floor(Math.random() * this.state.role.length);
    const workNum = Math.floor(Math.random() * this.state.work.length);
    const funNum = Math.floor(Math.random() * this.state.fun.length);
    const newPerson = [roleNum, workNum, funNum];
    this.setState({ current: newPerson });
  };

  render() {
    return (
      <div className="basic">
        {/*<div className="animation"><img src="./assets/dice-d20-solid.svg" /></div>
        <div className="fun-fact">
            <p id="front-hello">Hello!</p>
            <p id="front-name-sent">My name is <span id="front-name">Celia Rizzo</span>.</p>
            <p>
              I am{" "}
              <span id="front-role">{this.state.role[this.state.current[0]]}</span>{" "}
              who loves{" "}
              <span id="front-work">{this.state.work[this.state.current[1]]}</span>{" "}
              and{" "}
              <span id="front-fun">{this.state.fun[this.state.current[2]]}</span>!
            </p>

        </div>  
        <div className="front-nav">
          <button onClick={this.handleClick} className="front-nav-item">
            New Fun Fact!
          </button>
          <NavLink to="/about" className="front-nav-item">
            Learn More
          </NavLink>
        </div>*/}
        <h1>Looker Embed Test</h1>

       <div className="box embed-test"> <iframe width="100%" height="450" src="https://lookerstudio.google.com/embed/reporting/2e2a4d80-36e0-4ee3-b7b3-dfcda79cda07/page/9dZUD" frameborder="0"></iframe></div>

      </div>
    );
  }
}

export default Animation;
