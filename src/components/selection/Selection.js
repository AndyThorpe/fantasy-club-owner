import React, { Component } from 'react';
import SelectTeams from './SelectTeams.js';
import Budget from './Budget.js';
import Confirm from "./Confirm.js";
import store from "../../js/store/index.js";
import { connect } from "react-redux";
import { fetchProducts, updateSpend, updateSelection } from "../../js/actions/index.js";


class Selection extends Component {

  componentDidMount() {
      store.dispatch(fetchProducts()); 
  }

  componentDidUpdate() {
    if (this.props.loading === false) {
      var selections = this.checkSelections();
      this.updateFooter(selections);
      this.showConfirm(selections);
    }
  }

  checkSelections() {
    var selectedTeams = this.props.selection;
    var selections = 0;
    for (var i = 0; i < selectedTeams.length; i++) {
      if (selectedTeams[i].id) {
        selections++;
      }
    }
    return selections;
}

  showConfirm(selections) {
    if (selections === 8) {
     document.getElementById("confirm").style.display = "block";
     document.getElementById("confirm").style.zIndex = 200;
    setTimeout(function(){
      document.getElementById("confirm-box").style.top = "150px";
      document.getElementById("confirm-box").style.opacity = 1;
    }, 250);
   } 
 }
 
  selectTeam(id, step) {
    var selectorStep = "[data-step='" + step + "']";
    var stepElements = document.querySelectorAll(selectorStep);
    for (var i = 0; i < stepElements.length; ++i) {
      stepElements[i].parentElement.classList.remove('disabled');
    }

    var selector = "[data-id='" + id + "']";
    var elements = document.querySelectorAll(selector);

    for (i = 0; i < elements.length; ++i) {
      elements[i].parentElement.classList.add('disabled');
    }
  }


  updateSelection(thisSelection) {

    var trueVal = thisSelection.value * 100000000;
    var selectedTeams = this.props.selection;

    selectedTeams.splice(thisSelection.step, 1, {
      id: thisSelection.id,
      value: trueVal,
      selection: thisSelection.team,
      step: thisSelection.step,
      img: thisSelection.img

      }
    );

    this.updateSpend(selectedTeams);
    store.dispatch(updateSelection(selectedTeams));
    this.selectTeam(thisSelection.id, thisSelection.step);
    this.forceUpdate();
  }


  updateFooter(selections) {
    var footerHeight = selections * 25 + "px";
    document.getElementById("footer").style.height = footerHeight;
  }


  updateSpend(selectedTeams) {

    var selectionArr = Object.values(selectedTeams);
    var totalSpent = [];
    for (var i = 0; i < selectionArr.length; i++) {
      if (selectionArr[i].value !== undefined) {
          totalSpent[i] = parseFloat(selectionArr[i].value);
        }
      }
    var sum = totalSpent.reduce((a, b) => a + b, 0);
    var spent = sum;

    store.dispatch(updateSpend(spent));

  }

  render() {

    let slider = null;
    if (this.props.loading === false) {
      slider = <SelectTeams updateSelection={this.updateSelection.bind(this)}/>;
    }
    let confirm = null;
    if (this.checkSelections() === 8) {
      confirm =  <Confirm changeStep={this.props.changeStep}/>
    }
  
    
      return (
        <div className="selection-container">
          <header className="header">
            <h1 className="title">Forza Club Challenge</h1>
            <Budget />
          </header>
            { confirm }         
            { slider }
        </div>
      );
    }
  }

function mapStateToProps(state) {
  return {
    data: state.data,
    selection: state.selection,
    step: state.step,
    loading: state.loading
  };
}

export default connect(mapStateToProps)(Selection);
