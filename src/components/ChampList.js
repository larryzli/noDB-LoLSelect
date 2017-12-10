import React, { Component } from "react";
import Champion from "./Champion";

export default class ChampList extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        let champsLeft = this.state.props;
        return (
            <div>
                <p>Champ List</p>
                <Champion />
            </div>
        );
    }
}
