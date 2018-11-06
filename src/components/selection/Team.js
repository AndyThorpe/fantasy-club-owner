import React, { Component } from 'react';
import Check from "../../assets/img/check.png";
import noLogo from "../../assets/img/noLogo.png";


class Team extends Component {

 selection(e) {

  var thisSelection = {
    step: this.props.step,
 	  id: this.props.teamInfo.teamId,
 	  value: this.props.teamInfo.value,
    team: this.props.teamInfo.teamName,
    img: this.props.teamInfo.forzaId,
    element: e 
  };

  this.props.update(thisSelection);  
  }

  render() {

  	var teamInfo = this.props.teamInfo;
  	var id = teamInfo.teamId;
    var claass = "team" + id + " click";

    var forzaId = teamInfo.forzaId
    var logoSize = "big"
    var logoUrl = "https://badges.footballaddicts.com/" + logoSize + "/" + forzaId + ".png";
    var logo;

    if (teamInfo.forzaId) {
      logo = logoUrl
    } else {
      logo = noLogo;
    }

    return (
      <div className="team">
        <div id="click" 
          data-id={id} 
          data-step={this.props.step} 
        	className={claass} 
        	onClick={this.selection.bind(this)}
        >
          <div className="logo">
            <img src={logo} alt={teamInfo.teamName}/>
          </div>
            <div className="team-info">
              <h3>{teamInfo.teamName}</h3>
              <p>€{teamInfo.value} billion</p>
            </div>
            <img src={Check} className="check" alt="" />
        </div>
      </div>
     
    );
  }
}


export default Team;