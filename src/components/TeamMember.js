import React, { Component } from "react";
import "./TeamMember.css";

export default class TeamMember extends Component {
    render() {
        return (
            <div className="team-member">
                <p>{this.props.name}</p>
                <img
                    src={this.props.imgURL}
                    alt={`${this.props.name} champion pic`}
                />
            </div>
        );
    }
}
