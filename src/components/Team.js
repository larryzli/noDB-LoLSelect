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
        this.updateRedName = this.updateRedName.bind(this);
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
    submitEdit(newName) {
        this.setState({
            name: newName,
            edit: false
        });
    }
    updateRedName() {
        axios
            .put("/api/red_team/name", { name: this.state.input })
            .then(result => {
                this.setState({ name: result.data });
            });
    }

    componentDidMount() {
        if (this.props.color === "red-team") {
            axios
                .get("/api/red_team/name/")
                .then(result => {
                    this.setState({
                        name: result.data
                    });
                })
                .catch(console.log);
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
        const edit = !this.state.edit ? (
            <div onClick={this.allowEdit}>
                <span className="team-header">{this.state.name}</span>
            </div>
        ) : (
            <form>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder={"Red Team Name"}
                    // value="Red Team"
                    onChange={e => this.changeInput(e.target.value)}
                />
                <button onClick={this.updateRedName}>SUBMIT</button>
            </form>
        );
        return (
            <div className="team">
                <div className={this.props.color}>{edit}</div>
                <div className="team-list">{teamMembers}</div>
            </div>
        );
    }
}
