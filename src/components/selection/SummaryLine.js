import React, { Component } from 'react';
import store from "../../js/store/index.js";
import { removeSelection } from "../../js/actions/index.js";
import { connect } from "react-redux";


class SummaryLine extends Component {

  selection(e) {

    var thisSelection = {
      step: this.props.teamInfo[3],
      id: "",
      value: 0,
      team: "",
      element: e 
    };

   this.props.update(thisSelection);  

   store.dispatch(removeSelection(thisSelection));

  }

  render() {  	
    var selection = this.props.teamInfo[1];
    var value = this.props.teamInfo[2] / 100000000;
    if (value !== null) {
      var currency = " - €";
      var moneyText = "billion";
    }

    if (selection !== undefined) {
      return (
          <div className="summaryline">
              <p>{selection} {currency}{value} {moneyText} <span onClick={this.selection.bind(this)}>X</span></p>
          </div>
      );
    } else {
       return (
          null
      );
    }
  }
}


function mapStateToProps(state) {
  return {
  };
}

export default connect(mapStateToProps)(SummaryLine);