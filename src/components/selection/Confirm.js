import React, { Component } from "react";
import { connect } from "react-redux";


class Confirm extends Component {
  
  confirm() {
    this.props.changeStep("register");
  }

   displayMessage() {
     var withinBudget;
    if (this.props.spent > this.props.budget) {
      withinBudget = false;
    } else {
      withinBudget = true;
    }
     switch(withinBudget) {
       case true:
        return (
          "Congratulation, you have selected your teams!"
        )
        break;

       case false:
        return (
          "You have gone over your budget, go back and edit your selection"
        ) 
        break;
       default: 
          return (
              "Congratulation, you have selected your teams!"
          )
  }
}

  confirmBtn() {
    var withinBudget;
    if (this.props.spent > this.props.budget) {
      withinBudget = false;
    } else {
      withinBudget = true;
    }
    switch(withinBudget) {
    case true:
      return (
        <a className="btn" id="confirmBtn" onClick={this.confirm.bind(this)}>Confirm</a>
      )
    case false:
      return (
        <a className="btn inactive" id="confirmBtn">Confirm</a>
      ) 
  }
  }
  edit() {
     
       document.getElementById("confirm").style.display = "none";
       document.getElementById("confirm").style.zIndex = -1000;
      setTimeout(function(){
        document.getElementById("confirm-box").style.top = "0px";
        document.getElementById("confirm-box").style.opacity = 0;
      }, 250);
     
  
  }

  render() {
    
    return (
    <div id="confirm" className="confirm-back">
      <div id="confirm-box" className="confirm">
        <div className="message">
          <h3>{this.displayMessage()}</h3>
        </div>
        <div className="btns">
          {this.confirmBtn()}
          <a className="btn" onClick={this.edit.bind(this)}>
            Edit
          </a>
        </div>
      </div>
    </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    spent: state.spent
  };
}

export default connect(mapStateToProps)(Confirm);
