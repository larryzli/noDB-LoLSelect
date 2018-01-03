import React, { Component } from "react";
import axios from "axios";
import TeamMember from "./TeamMember.js";
import "./Team.css";

export default class Team extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
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
            edit: true
        });
    }

    updateName(event) {
        event.preventDefault();
        axios
            .put(`/api/${this.props.color}/name/`, { name: this.state.input })
            .then(result => {
                this.setState({
                    name: result.data,
                    edit: false
                });
            });
    }

    componentDidMount() {
        axios.get(`/api/${this.props.color}/name`).then(result => {
            this.setState({
                name: result.data,
                input: result.data
            });
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
            <div onClick={this.allowEdit}>
                <span className="team-header">
                    {this.state.name ? this.state.name : "Click to name"}
                </span>
            </div>
        ) : (
            <form onSubmit={e => this.updateName(e)}>
                <input
                    className="name-input"
                    type="text"
                    name=""
                    id=""
                    placeholder="Team Name"
                    value={this.state.input}
                    onChange={e => this.changeInput(e.target.value)}
                />
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
