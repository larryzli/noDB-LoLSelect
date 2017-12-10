import React, { Component } from "react";
import axios from "axios";
import TeamMember from "./TeamMember.js";
import "./Team.css";

export default class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Temp Name",
            teamMembers: []
        };
    }

    componentDidMount() {
        if (this.props.color === "red-team") {
            axios.get("/api/red_team/name").then(result => {
                this.setState({
                    name: result.data
                });
            });

            axios.get("/api/red_team/").then(result => {
                this.setState({
                    teamMembers: result.data
                });
            });
        } else {
            axios.get("/api/blue_team/name").then(result => {
                this.setState({
                    name: result.data
                });
            });

            axios.get("/api/blue_team/").then(result => {
                this.setState({
                    teamMembers: result.data
                });
            });
        }
    }
    render() {
        const teamMembers = this.state.teamMembers.map(champion => {
            return (
                <TeamMember
                    key={champion.id}
                    name={champion.name}
                    imgURL={champion.image_url}
                />
            );
        });
        return (
            <div className="team">
                <div className={this.props.color}>
                    <p>{this.state.name}</p>
                </div>
                {teamMembers}
            </div>
        );
    }
}
