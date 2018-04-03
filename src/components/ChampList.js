import React, { Component } from "react";
import Champion from "./Champion";
import "./ChampList.css";

export default class ChampList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };

    this.resetInput = this.resetInput.bind(this);
  }

  inputChange(value) {
    this.setState({
      input: value
    });
  }

  resetInput() {
    this.setState({
      input: ""
    });
  }

  render() {
    let champsLeft = this.props.champsLeft.map(
      val =>
        val.name.toLowerCase().includes(this.state.input.toLowerCase()) ? (
          <Champion
            champAddRed={this.props.champAddRed}
            champAddBlue={this.props.champAddBlue}
            reset={this.resetInput}
            key={val.id}
            id={val.id}
            name={val.name}
            picURL={val.image_url}
            displayInfo={this.props.displayInfo}
          />
        ) : null
    );
    return (
      <div className="champlist-container">
        <div className="champlist-header">
          <div>
            <button onClick={this.props.resetTeams}>RESET TEAMS</button>
          </div>
          <div className="champs">CHAMPIONS</div>
          <input
            onChange={e => this.inputChange(e.target.value)}
            type="text"
            placeholder="Search Champions"
            value={this.state.input}
          />
        </div>
        <div className="champlist">{champsLeft}</div>
      </div>
    );
  }
}
