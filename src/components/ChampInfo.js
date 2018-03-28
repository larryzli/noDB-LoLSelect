import React, { Component } from "react";
import "./ChampInfo.css";

class ChampInfo extends Component {
  render() {
    console.log(this.props.data);
    return (
      <div
        className="champ-info-background"
        onClick={e => this.props.closeInfo()}
      >
        <div className="champ-info-container">
          <img
            className="champ-info-pic"
            src={this.props.data.big_image_url}
            alt="champion"
          />
          <div className="champ-info-data">
            <div className="champ-info-name">{this.props.data.name}</div>
            <div className="champ-info-stats">
              <div className="champ-info-stats-title">Base Stats</div>
              <div className="champ-info-stat">
                <span>HP:</span>{" "}
                <span>
                  {this.props.data.hp} (+{this.props.data.hpperlevel} / level)
                </span>
              </div>
              <div className="champ-info-stat">
                <span>HP Regen:</span>{" "}
                <span>
                  {this.props.data.hpregen} (+{this.props.data.hpregenperlevel}{" "}
                  / level)
                </span>
              </div>
              <div className="champ-info-stat">
                <span>Mana:</span>{" "}
                <span>
                  {this.props.data.mp} (+{this.props.data.mpperlevel} / level)
                </span>
              </div>
              <div className="champ-info-stat">
                <span>Mana Regen:</span>{" "}
                <span>
                  {this.props.data.mpregen} (+{this.props.data.mpregenperlevel}{" "}
                  / level)
                </span>
              </div>
              <div className="champ-info-stat">
                <span>Attack Damage:</span>{" "}
                <span>
                  {this.props.data.attackdamage} (+{
                    this.props.data.attackdamageperlevel
                  }{" "}
                  / level)
                </span>
              </div>
              <div className="champ-info-stat">
                <span>Attack Range:</span>{" "}
                <span>{this.props.data.attackrange}</span>
              </div>
              <div className="champ-info-stat">
                <span>Move Speed:</span>{" "}
                <span>{this.props.data.movespeed}</span>
              </div>
              <div className="champ-info-stat">
                <span>Armor:</span>{" "}
                <span>
                  {this.props.data.armor} (+{this.props.data.armorperlevel} /
                  level)
                </span>
              </div>
              <div className="champ-info-stat">
                <span>Magic Resist:</span>{" "}
                <span>
                  {this.props.data.spellblock} (+{
                    this.props.data.spellblockperlevel
                  }{" "}
                  / level)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ChampInfo;
