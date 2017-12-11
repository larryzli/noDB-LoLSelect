import React, { Component } from "react";
import axios from "axios";
import Champion from "./Champion";
import "./ChampList.css";

export default class ChampList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(champID) {
        console.log({ champID });
        axios
            .post(`/api/red_team/`, { champID })
            .then(result => console.log(result.data));
    }

    render() {
        let champsLeft = this.props.champsLeft.map(val => (
            <Champion
                clickHandler={this.clickHandler}
                key={val.id}
                id={val.id}
                name={val.name}
                picURL={val.image_url}
            />
        ));
        return (
            <div className="champlist-container">
                <p>CHAMPIONS</p>
                <div className="champlist">{champsLeft}</div>
            </div>
        );
    }
}
