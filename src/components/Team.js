import React, { Component } from "react";
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

    render() {
        const teamMembers = this.props.teamMembers.map(champion => {
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
                    <p>{this.props.name}</p>
                </div>
                {teamMembers}
            </div>
        );
    }
}
