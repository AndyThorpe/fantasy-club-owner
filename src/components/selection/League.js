import React, { Component } from 'react';
import Team from './Team';

class LeagueItem extends Component {

  render() {

  	var data = this.props.league;
  	var leagueName = data.leagueName;
	  var teams = data.teams;
  	var teamLine = teams.map((teamInfo, index) => {
        return (
        	<Team 
        	teamInfo={teamInfo} 
        	update={this.props.update} 
        	step={this.props.step}
					updateStep={this.props.updateStep}
					key={index}
        	/>
        );
      });

    var step = "step step" + this.props.step;

    return (
      <div data-step={this.props.step} className={step} >
	      <h1>
	      	<strong>
	      		{leagueName}
	      	</strong>
	      </h1>
        <div id="team-container" className="team-container">
	         {teamLine}
        </div>
	  </div>
    );
  }
}


export default LeagueItem;