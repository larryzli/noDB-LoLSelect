import React, { Component } from "react";
import Champion from "./Champion";
import "./ChampList.css";

export default class ChampList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let champsLeft = this.props.champsLeft.map(val => (
            <Champion key={val.id} name={val.name} picURL={val.image_url} />
        ));
        // console.log(champsLeft);
        return (
            <div className="champlist-container">
                <p>CHAMPIONS</p>
                <div className="champlist">{champsLeft}</div>
            </div>
        );
    }
}
