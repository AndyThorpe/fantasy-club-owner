import React, { Component } from 'react';
import SummaryLine from './SummaryLine';
import { connect } from "react-redux";


class Summary extends Component {


  render() {

   var summarySel = [];
   var selection = this.props.selection;
   var selectionArr = Object.values(selection);

   for (var i = 0; i < selectionArr.length; i++) {

    if (selectionArr[i].selection !== "") {
       summarySel.push([selectionArr[i].id,
                  selectionArr[i].selection,
                  selectionArr[i].value,
                  selectionArr[i].step
                  ]);
        }
      }

    var summaryLine = summarySel.map((info, index) => {
          return (
              <SummaryLine 
                teamInfo={info} 
                update={this.props.update} 
                key={index}
                />
          )
    });
    return (
      <div className="summary">
          {summaryLine}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selection: state.selection
  };
}

export default connect(mapStateToProps)(Summary);