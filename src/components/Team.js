import React, { Component } from "react";
import axios from "axios";
import TeamMember from "./TeamMember.js";
import "./Team.css";

export default class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: ""
        };
    }

    componentDidMount() {
        if (this.props.color === "red-team") {
            axios.get("/api/red_team/name").then(result => {
                this.setState({
                    name: result.data
                });
            });
        } else {
            axios.get("/api/blue_team/name").then(result => {
                this.setState({
                    name: result.data
                });
            });
        }
    }

    render() {
        const teamMembers = this.props.teamMembers.map(champion => {
            return (
                <TeamMember
                    removeMember={this.props.removeMember}
                    key={champion.id}
                    id={champion.id}
                    name={champion.name}
                    imgURL={champion.image_url}
                />
            );
        });
        return (
            <div className="team">
                <div className={this.props.color}>
                    <span className="team-header">{this.state.name}</span>
                </div>
                <div className="team-list">{teamMembers}</div>
            </div>
        );
    }
}
