import React, { Component } from "react";
import TeamMember from "./TeamMember.js";
import "./Team.css";

export default class Team extends Component {
    render() {
        return (
            <div className="team">
                <div className="red-header">
                    <p>Team Name</p>
                </div>
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
                <TeamMember />
            </div>
        );
    }
}
