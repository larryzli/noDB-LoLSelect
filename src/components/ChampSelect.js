import React, { Component } from "react";
import axios from "axios";
import Team from "./Team";
import ChampList from "./ChampList";
import "./ChampSelect.css";

export default class ChampSelect extends Component {
    constructor(props) {
        super(props);

        this.state = {
            champions: [],
            redTeam: [],
            redName: "",
            blueTeam: [],
            blueName: ""
        };

        this.champAddRed = this.champAddRed.bind(this);
        this.champAddBlue = this.champAddBlue.bind(this);
    }
    champAddRed(champID) {
        console.log({ champID });
        axios.post(`/api/red_team/`, { champID }).then(result => {
            this.setState({
                redTeam: result.data
            });
        });
    }
    champAddBlue(champID) {
        console.log({ champID });
        axios.post(`/api/blue_team/`, { champID }).then(result => {
            this.setState({
                blueTeam: result.data
            });
        });
    }
    componentDidMount() {
        axios
            .get("/api/champions/")
            .then(result => {
                return this.setState({
                    champions: result.data
                });
            })
            .catch(console.log);
        axios.get("/api/red_team/name").then(result => {
            this.setState({
                redName: result.data
            });
        });

        axios.get("/api/red_team/").then(result => {
            this.setState({
                redTeam: result.data
            });
        });
        axios.get("/api/blue_team/name").then(result => {
            this.setState({
                blueName: result.data
            });
        });

        axios.get("/api/blue_team/").then(result => {
            this.setState({
                blueTeam: result.data
            });
        });
    }

    updateTeam(team) {}
    render() {
        return (
            <div className="champ-select">
                <Team
                    color="red-team"
                    name={this.state.redName}
                    teamMembers={this.state.redTeam}
                />
                <ChampList
                    champAddRed={this.champAddRed}
                    champAddBlue={this.champAddBlue}
                    champsLeft={this.state.champions}
                />
                <Team
                    color="blue-team"
                    name={this.state.blueName}
                    teamMembers={this.state.blueTeam}
                />
            </div>
        );
    }
}
