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
            blueTeam: []
        };

        this.champAddRed = this.champAddRed.bind(this);
        this.champAddBlue = this.champAddBlue.bind(this);
        this.champRemoveRed = this.champRemoveRed.bind(this);
        this.champRemoveBlue = this.champRemoveBlue.bind(this);
    }
    champAddRed(champID) {
        if (this.state.redTeam.length < 5) {
            axios.post(`/api/red_team/`, { champID }).then(result => {
                this.setState({
                    redTeam: result.data
                });
            });
        } else {
            alert("RED TEAM IS FULL");
        }
    }
    champAddBlue(champID) {
        if (this.state.blueTeam.length < 5) {
            axios.post(`/api/blue_team/`, { champID }).then(result => {
                this.setState({
                    blueTeam: result.data
                });
            });
        } else {
            alert("BLUE TEAM IS FULL");
        }
    }
    champRemoveRed(champID) {
        console.log(champID);
        axios.delete(`/api/red_team/${champID}`).then(result => {
            this.setState({
                redTeam: result.data
            });
        });
    }
    champRemoveBlue(champID) {
        console.log(champID);
        axios.delete(`/api/blue_team/${champID}`).then(result => {
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

        axios.get("/api/red_team/").then(result => {
            this.setState({
                redTeam: result.data
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
                    removeMember={this.champRemoveRed}
                    teamMembers={this.state.redTeam}
                />
                <ChampList
                    champAddRed={this.champAddRed}
                    champAddBlue={this.champAddBlue}
                    champsLeft={this.state.champions}
                />
                <Team
                    color="blue-team"
                    removeMember={this.champRemoveBlue}
                    teamMembers={this.state.blueTeam}
                />
            </div>
        );
    }
}
