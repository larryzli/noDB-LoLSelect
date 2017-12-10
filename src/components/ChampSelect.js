import React, { Component } from "react";
import axios from "axios";
import Team from "./Team";
import ChampList from "./ChampList";
import "./ChampSelect.css";

export default class ChampSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: []
        };
    }
    componentDidMount() {
        axios
            .get("/api/champions/")
            .then(result => {
                console.log(result.data);
                return this.setState({
                    champions: result.data
                });
            })
            .catch(console.log);
    }
    render() {
        return (
            <div className="champ-select">
                <Team />
                <ChampList champsLeft={this.state.champions} />
                <Team />
            </div>
        );
    }
}
