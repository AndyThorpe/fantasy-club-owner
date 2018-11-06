import React, { Component } from 'react';
import './App.css';
import Loader from './assets/img/loader.gif';
import Selection from './components/selection/Selection.js';
import Welcome from './components/Welcome.js';
import Register from './components/Register.js';
import store from "./js/store/index.js";
import { connect } from "react-redux";
import { changeScreen } from "./js/actions/index.js";

class App extends Component {


  changeStep (screen) {
    store.dispatch(changeScreen(screen));
    // this.forceUpdate();
  }


  render() {  

    let screen = null;
    let loader = null;


    if (this.props.loading === true) {
      loader =  <div className="loader" >
        <img src={Loader} alt="loading"/>
      </div>
    } else {
      loader = null;
    }

    
    if (this.props.screen === "welcome") {
      screen =  
      <div id="step-welcome" className="welcome active">
        <Welcome changeStep = {this.changeStep.bind(this)}/>
      </div>;
    }
    if (this.props.screen === "selection") {
      screen = 
      <div id="step-selection" className="selection">
        <Selection changeStep = {this.changeStep.bind(this)}/>
      </div>
    }
    if (this.props.screen === "register") {
      screen =       
      <div id="step-register" className="register">
        <Register changeStep = {this.changeStep.bind(this)}/>
      </div>
    }

      return (
        <div className="App">
           { loader }
           { screen }
        </div>
      );
  }
}

function mapStateToProps(state) {
  return {
    screen: state.screen,
    loading: state.loading,

  };
}

export default connect(mapStateToProps)(App);

