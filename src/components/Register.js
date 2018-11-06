import React, { Component } from "react";
import Registration from "./Registration";
import TeamLogo from "./selection/TeamLogo";
import { connect } from "react-redux";

class Register extends Component {


  render() {
    var selections = this.props.selection.map((teamInfo, index) => {
      return (
          <TeamLogo 
          img={teamInfo.img} 
          key={index}
          delay={index}
          teamName={teamInfo.teamName}
          />
      );
    })

    return (
    <div className="welcome-container">
      <div className="registration-text">
        <h1>Register Now</h1>
        <h3>And enter your team into the Forza fantasy club challenge</h3>
          <Registration 
            changeStep = {this.props.changeStep}
          />
            <h4>Your Selections:</h4>
            {selections}
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selection: state.selection,
    data: state.data

  };
}

export default connect(mapStateToProps)(Register);
