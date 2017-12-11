import React, { Component } from "react";
// import axios from "axios";
import Champion from "./Champion";
import "./ChampList.css";

export default class ChampList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: ""
        };

        // this.champSelectedRed = this.champSelectedRed.bind(this);
    }

    inputChange(value) {
        this.setState({
            input: value
        });
    }

    // champSelectedRed() {
    //     this.setState({
    //         input: ""
    //     });
    //     this.props.champAddRed();
    // }

    render() {
        let champsLeft = !this.state.input
            ? this.props.champsLeft.map(val => (
                  <Champion
                      champAddRed={this.props.champAddRed}
                      champAddBlue={this.props.champAddBlue}
                      key={val.id}
                      id={val.id}
                      name={val.name}
                      picURL={val.image_url}
                  />
              ))
            : this.props.champsLeft.map(
                  val =>
                      val.name
                          .toLowerCase()
                          .includes(this.state.input.toLowerCase()) ? (
                          <Champion
                              champAddRed={this.props.champAddBlue}
                              champAddBlue={this.props.champAddBlue}
                              key={val.id}
                              id={val.id}
                              name={val.name}
                              picURL={val.image_url}
                          />
                      ) : null
              );
        return (
            <div className="champlist-container">
                <div className="champlist-header">
                    <button onClick={this.props.resetTeams}>RESET TEAMS</button>
                    <p>CHAMPIONS</p>
                    <input
                        onChange={e => this.inputChange(e.target.value)}
                        type="text"
                        placeholder="Search Champions"
                    />
                </div>
                <div className="champlist">{champsLeft}</div>
            </div>
        );
    }
}
