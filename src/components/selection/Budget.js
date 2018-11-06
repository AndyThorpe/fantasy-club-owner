import React, { Component } from 'react';
import { connect } from "react-redux";


class Budget extends Component {

  numberWithCommas(num) {
    	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  render() {

    var remaining = this.props.budget;
    var spent = this.props.spent;
    var budget;
  
    if (remaining >= 0) {
      budget = this.numberWithCommas((remaining - spent) / 100000000);
    } else {
      budget = this.numberWithCommas((remaining + spent) / 100000000);
    }

    return (
      <div className="budget">
       	 <h2>€ <span id="budget">{budget}</span> Billion </h2>
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

export default connect(mapStateToProps)(Budget);
