import React, { Component } from "react";
import axios from "axios";
import ReactTooltip from "react-tooltip";
import "./ChampInfo.css";
import placeholder from "../png/card_placeholder.png";
import circles from "../svg/circles.svg";

class ChampInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 1,
      details: {},
      loading: true,
      urlName: this.props.data.name
        .toLowerCase()
        .split(".")
        .join("")
        .split("'")
        .join("")
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join("")
    };
  }
  componentDidMount() {
    if (this.props.url) {
      axios
        .get(
          `${this.props.url}/data/en_US/champion/${
            this.state.urlName === "Reksai" ? "RekSai" : this.state.urlName
          }.json`
        )
        .then(response => {
          // console.log(response);
          // console.log(response.data.data[this.state.urlName]);
          this.setState({
            details:
              response.data.data[
                this.state.urlName === "Reksai" ? "RekSai" : this.state.urlName
              ],
            loading: false
          });
        });
    }
  }
  changeLevel(val) {
    if (this.state.level >= 1 && this.state.level <= 18) {
      this.setState({ level: this.state.level + val });
    }
  }
  render() {
    // console.log(this.props.data);
    const imageStyle = {
      width: "308px",
      height: "560px",
      backgroundImage: `url(${
        this.props.data.big_image_url
      }), url(${placeholder})`
    };
    return (
      <div
        className="champ-info-background"
        onClick={e => this.props.closeInfo()}
      >
        <div
          className="champ-info-container"
          onClick={e => e.stopPropagation()}
        >
          <div style={imageStyle} />
          {!this.state.loading ? (
            <div className="champ-info-data">
              <div className="champ-info-name">{this.props.data.name}</div>
              {!this.state.loading ? (
                <div className="champ-info-title">
                  {this.state.details.title}
                </div>
              ) : null}
              {!this.state.loading ? (
                <div className="champ-info-roles">
                  {this.state.details.tags.join(" / ")}
                </div>
              ) : null}
              {!this.state.loading ? (
                <div className="champ-info-lore">{this.state.details.lore}</div>
              ) : null}

              <div className="champ-info-stats-title">
                <button
                  className="champ-info-button"
                  onClick={e =>
                    this.state.level === 1 ? null : this.changeLevel(-1)
                  }
                >
                  -
                </button>
                Lvl {this.state.level} Base Stats
                <button
                  className="champ-info-button"
                  onClick={e =>
                    this.state.level === 18 ? null : this.changeLevel(1)
                  }
                >
                  +
                </button>
              </div>
              <div className="champ-info-stats">
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Health:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.hp +
                        this.props.data.hpperlevel * (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Health Regen:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.hpregen +
                        this.props.data.hpregenperlevel *
                          (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Mana:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.mp +
                        this.props.data.mpperlevel * (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Mana Regen:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.mpregen +
                        this.props.data.mpregenperlevel *
                          (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Attack Damage:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.attackdamage +
                        this.props.data.attackdamageperlevel *
                          (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Attack Range:</div>
                  <div className="champ-stat-value">
                    {Math.round(this.props.data.attackrange * 1000) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Attack Speed:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (0.625 / (1 + this.props.data.attackspeedoffset) +
                        this.props.data.attackspeedperlevel /
                          100 *
                          (this.state.level - 1) *
                          (0.7025 + 0.0175 * (this.state.level - 1))) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Move Speed:</div>
                  <div className="champ-stat-value">
                    {Math.round(this.props.data.movespeed * 1000) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Armor:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.armor +
                        this.props.data.armorperlevel *
                          (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
                <div className="champ-info-stat">
                  <div className="champ-stat-label">Magic Resist:</div>
                  <div className="champ-stat-value">
                    {Math.round(
                      (this.props.data.spellblock +
                        this.props.data.spellblockperlevel *
                          (this.state.level - 1)) *
                        1000
                    ) / 1000}
                  </div>
                </div>
              </div>
              <div className="champ-info-skills">
                <ReactTooltip
                  id="passive"
                  effect="solid"
                  className="champ-skill-tooltip"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "PASSIVE – " + this.state.details.passive.description
                    }}
                  />
                </ReactTooltip>
                <ReactTooltip
                  id="skill1"
                  effect="solid"
                  className="champ-skill-tooltip"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "SKILL 1 – " + this.state.details.spells[0].description
                    }}
                  />
                </ReactTooltip>
                <ReactTooltip
                  id="skill2"
                  effect="solid"
                  className="champ-skill-tooltip"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "SKILL 2 – " + this.state.details.spells[1].description
                    }}
                  />
                </ReactTooltip>
                <ReactTooltip
                  id="skill3"
                  effect="solid"
                  className="champ-skill-tooltip"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "SKILL 3 – " + this.state.details.spells[2].description
                    }}
                  />
                </ReactTooltip>
                <ReactTooltip
                  id="skill4"
                  effect="solid"
                  className="champ-skill-tooltip"
                >
                  <div
                    dangerouslySetInnerHTML={{
                      __html:
                        "ULTIMATE – " + this.state.details.spells[3].description
                    }}
                  />
                </ReactTooltip>
                <img
                  data-tip
                  data-for="passive"
                  className="champ-img-skill"
                  src={`${this.props.url}/img/passive/${
                    this.state.details.passive.image.full
                  }`}
                  alt={this.state.details.passive.name}
                />
                <img
                  data-tip
                  data-for="skill1"
                  className="champ-img-skill"
                  src={`${this.props.url}/img/spell/${
                    this.state.details.spells[0].image.full
                  }`}
                  alt={this.state.details.spells[0].name}
                />
                <img
                  data-tip
                  data-for="skill2"
                  className="champ-img-skill"
                  src={`${this.props.url}/img/spell/${
                    this.state.details.spells[1].image.full
                  }`}
                  alt={this.state.details.spells[1].name}
                />
                <img
                  data-tip
                  data-for="skill3"
                  className="champ-img-skill"
                  src={`${this.props.url}/img/spell/${
                    this.state.details.spells[2].image.full
                  }`}
                  alt={this.state.details.spells[2].name}
                />
                <img
                  data-tip
                  data-for="skill4"
                  className="champ-img-skill"
                  src={`${this.props.url}/img/spell/${
                    this.state.details.spells[3].image.full
                  }`}
                  alt={this.state.details.spells[3].name}
                />
              </div>
            </div>
          ) : (
            <div className="champ-info-data">
              <img src={circles} alt="loading data" />
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ChampInfo;
