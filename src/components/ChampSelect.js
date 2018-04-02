import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";
import Team from "./Team";
import ChampList from "./ChampList";
import ChampInfo from "./ChampInfo";
import "./ChampSelect.css";
import loader from "./../svg/grid.svg";

export default class ChampSelect extends Component {
  constructor(props) {
    super(props);

    this.state = {
      champions: [],
      redTeam: [],
      blueTeam: [],
      redName: "Red Team",
      blueName: "Blue Team",
      showChampInfo: false,
      infoIndex: 0,
      url: ""
    };

    this.champAddRed = this.champAddRed.bind(this);
    this.champAddBlue = this.champAddBlue.bind(this);
    this.champRemoveRed = this.champRemoveRed.bind(this);
    this.champRemoveBlue = this.champRemoveBlue.bind(this);
    this.resetTeams = this.resetTeams.bind(this);
    this.updateBlueName = this.updateBlueName.bind(this);
    this.updateRedName = this.updateRedName.bind(this);
    this.displayInfo = this.displayInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }
  champAddRed(champID) {
    if (this.state.redTeam.length < 5) {
      axios.post(`/api/red_team/`, { champID }).then(result => {
        this.setState({
          redTeam: result.data
        });
      });
    } else {
      swal(
        `${this.state.redName} is full.`,
        "A team can not contain more than 5 champions.",
        "error"
      );
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
      swal(
        `${this.state.blueName} is full.`,
        "A team can not contain more than 5 champions.",
        "error"
      );
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
  displayInfo(champID) {
    let index = this.state.champions.findIndex(champ => champ.id === champID);
    this.setState({ showChampInfo: true, infoIndex: index });
  }
  closeInfo() {
    this.setState({ showChampInfo: false });
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
    axios.get(`/api/blue_team/name`).then(result => {
      this.setState({
        blueName: result.data
      });
    });
    axios.get(`/api/red_team/name`).then(result => {
      this.setState({
        redName: result.data
      });
    });
    axios
      .get("https://ddragon.leagueoflegends.com/realms/na.json")
      .then(response => {
        this.setState({ url: `${response.data.cdn}/${response.data.v}` });
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
    axios.put("/api/teams/").then(result => {
      this.setState({
        blueName: result.data.blue_name,
        redName: result.data.red_name
      });
    });
  }

  updateBlueName(input) {
    axios.put(`/api/blue_team/name/`, { name: input }).then(result => {
      this.setState({
        blueName: result.data
      });
    });
  }
  updateRedName(input) {
    axios.put(`/api/red_team/name/`, { name: input }).then(result => {
      this.setState({
        redName: result.data
      });
    });
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
          <img className="loader-svg" src={loader} alt="loading animation" />
          <p className="loader-text">LOADING CHAMPIONS</p>
        </div>
      ) : (
        <ChampList
          resetTeams={this.resetTeams}
          champAddRed={this.champAddRed}
          champAddBlue={this.champAddBlue}
          champsLeft={remainingChamps}
          displayInfo={this.displayInfo}
        />
      );
    return (
      <div>
        <div className="champ-select">
          <Team
            color="red_team"
            name={this.state.redName}
            updateHandler={this.updateRedName}
            removeMember={this.champRemoveRed}
            teamMembers={this.state.redTeam}
            displayInfo={this.displayInfo}
          />
          {loadingChamps}
          <Team
            color="blue_team"
            name={this.state.blueName}
            updateHandler={this.updateBlueName}
            removeMember={this.champRemoveBlue}
            teamMembers={this.state.blueTeam}
            displayInfo={this.displayInfo}
          />
        </div>
        {this.state.showChampInfo ? (
          <ChampInfo
            data={this.state.champions[this.state.infoIndex]}
            closeInfo={this.closeInfo}
            url={this.state.url}
          />
        ) : null}
      </div>
    );
  }
}
