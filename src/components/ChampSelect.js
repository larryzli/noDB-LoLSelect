import React, { Component } from "react";
import axios from "axios";
import Team from "./Team";
import ChampList from "./ChampList";
import "./ChampSelect.css";
// import loader from "./../img/Pacman.svg";

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
        this.resetTeams = this.resetTeams.bind(this);
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
        axios.delete(`/api/red_team/${champID}`).then(result => {
            this.setState({
                redTeam: result.data
            });
        });
    }
    champRemoveBlue(champID) {
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

    resetTeams() {
        axios
            .delete("/api/red_team/")
            .then(result => {
                this.setState({
                    redTeam: result.data
                });
            })
            .catch(console.log);
        axios
            .delete("/api/blue_team/")
            .then(result => {
                this.setState({
                    blueTeam: result.data
                });
            })
            .catch(console.log);
    }
    render() {
        const redTeamIDs = this.state.redTeam.map(champ => champ.id);
        const blueTeamIDs = this.state.blueTeam.map(champ => champ.id);
        const remainingChamps = this.state.champions.filter(champ => {
            return (
                redTeamIDs.indexOf(champ.id) === -1 &&
                blueTeamIDs.indexOf(champ.id) === -1
            );
        });
        const loadingChamps =
            this.state.champions.length === 0 ? (
                <div className="loader">
                    <p>LOADING CHAMPIONS...</p>
                    {/* <img src={loader} alt="" /> */}
                </div>
            ) : (
                <ChampList
                    resetTeams={this.resetTeams}
                    champAddRed={this.champAddRed}
                    champAddBlue={this.champAddBlue}
                    champsLeft={remainingChamps}
                />
            );
        return (
            <div className="champ-select">
                <Team
                    color="red_team"
                    removeMember={this.champRemoveRed}
                    teamMembers={this.state.redTeam}
                />
                {loadingChamps}
                <Team
                    color="blue_team"
                    removeMember={this.champRemoveBlue}
                    teamMembers={this.state.blueTeam}
                />
            </div>
        );
    }
}
