import React, { Component } from "react";
import TeamMember from "./TeamMember.js";
import "./Team.css";

export default class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            input: "",
            edit: false
        };
        this.allowEdit = this.allowEdit.bind(this);
        this.updateName = this.updateName.bind(this);
        this.changeInput = this.changeInput.bind(this);
    }
    changeInput(value) {
        this.setState({
            input: value
        });
    }
    allowEdit() {
        this.setState({
            edit: true,
            input: this.props.name
        });
    }

    updateName(event) {
        event.preventDefault();
        this.props.updateHandler(this.state.input);
        this.setState({
            edit: false
        });
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
        const nameDisplayEdit = !this.state.edit ? (
            <div className="team-header" onClick={this.allowEdit}>
                <div className="team-name">
                    {this.props.name ? this.props.name : "Click to name"}
                </div>
                <div className="instructions">(click to rename)</div>
            </div>
        ) : (
            <form onSubmit={e => this.updateName(e)}>
                <input
                    className="name-input"
                    type="text"
                    id=""
                    placeholder="Team Name"
                    maxLength="10"
                    value={this.state.input}
                    onChange={e => this.changeInput(e.target.value)}
                />
                <div className="instructions">(enter to submit)</div>
            </form>
        );
        return (
            <div className="team">
                <div className={this.props.color}>{nameDisplayEdit}</div>
                <div className="team-list">{teamMembers}</div>
            </div>
        );
    }
}
