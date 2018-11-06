import React, { Component } from "react";
import Tween from "rc-tween-one";

class Welcome extends Component {
  
  start() {
    this.props.changeStep("selection");
    console.log("start");
  }

  render() {
    return (
    <div className="welcome-container">
      <div className="welcome-text">
      <Tween
        animation={[
          { x: 0, y: '-50', blur: '10px', opacity: 0, type: 'from', duration: 600, delay: 200 },
        ]}
        style={{ opacity: 1 }}
      >
        <h1 id="line1">Forza</h1>
        <h2 id="line2">Fantasy Club Owner</h2>
        </Tween>
        <Tween
          animation={[
            { x: 0, y: '0', blur: '10px', opacity: 0, type: 'from', duration: 300, delay: 650 },
          ]}
          style={{ opacity: 1 }}
        >
            <div id="line3" className="btns">
                <a className="btn selectbtn" onClick={this.start.bind(this)}>
                  Select your teams
                </a>
            </div>
          </Tween>
      </div>
    </div>
    );
  }
}

export default Welcome;