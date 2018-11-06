import React, { Component } from 'react';
import noLogo from "../../assets/img/noLogo.png";
import Tween from "rc-tween-one";


class TeamLogo extends Component {


  render() {

    var forzaId = this.props.img
    var logoSize = "big"
    var logoUrl = "https://badges.footballaddicts.com/" + logoSize + "/" + forzaId + ".png";
    var delay = this.props.delay;
    var del = delay * 100;
    var logo;

    if (forzaId) {
      logo = logoUrl
    } else {
      logo = noLogo;
    }

    return (
      <Tween
      animation={[
        { x: 0, y: '0', blur: '10px', opacity: 0, type: 'from', duration: 600, delay: del },
      ]}
      style={{ opacity: 1, float:"left" }}
    >
        <div className="selected-logo">
          <img src={logo} alt={this.props.teamName} />
        </div>
        </Tween>
    );
  }
}

export default TeamLogo;