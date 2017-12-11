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
    }

    inputChange(value) {
        this.setState({
            input: value
        });
    }

    render() {
        let champsLeft = this.props.champsLeft.map(
            val =>
                val.name === this.state.input ? null : (
                    <Champion
                        champAddRed={this.props.champAddRed}
                        champAddBlue={this.props.champAddBlue}
                        key={val.id}
                        id={val.id}
                        name={val.name}
                        picURL={val.image_url}
                    />
                )
        );
        return (
            <div className="champlist-container">
                <div className="champlist-header">
                    <button>RESET TEAMS</button>
                    <p>CHAMPIONS</p>
                    <form>
                        <input
                            onChange={e => this.inputChange(e.target.value)}
                            type="text"
                            placeholder="Search"
                        />
                        {/* <input type="submit" /> */}
                    </form>
                </div>
                <div className="champlist">{champsLeft}</div>
            </div>
        );
    }
}
