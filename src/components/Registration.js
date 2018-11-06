import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import createMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';


const DarkTheme = createMuiTheme({
  palette: {
    type: 'light',
  },
});


class Registration extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      email:'',
      password:''
    }
  }

  goBack() {
    this.props.changeStep("selection");
  }

  render() {
    return (
      <div>
        <MuiThemeProvider theme={DarkTheme}>
          <div>
          
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             style={boxstyle}
             onChange = {(event,newValue) => this.setState({first_name:newValue})}
             
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             style={boxstyle}
             onChange = {(event,newValue) => this.setState({last_name:newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             style={boxstyle}
             onChange = {(event,newValue) => this.setState({email:newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             style={boxstyle}
             onChange = {(event,newValue) => this.setState({password:newValue})}
             />
           <br/>
           <FlatButton label="Back" primary={true} style={style} onClick={this.goBack.bind(this)}/>
           <FlatButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
          </div>
         </MuiThemeProvider>
      </div>
    );
  }
}
const style = {
  margin: 15,
  color: 'white',
  background: '#002a3e'
};

const boxstyle = {
  margin: 0,
};



export default Registration;