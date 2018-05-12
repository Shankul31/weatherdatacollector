import React, { Component } from 'react';
import Titles from './titles';


class Login extends Component {
    constructor(props){
            super(props);

            this.state = {
             username: "",
             password: ""
            };
            //this.rowCallback = this.rowCallback.bind(this);
            //this.handleChange = this.handleChange.bind(this);
            //this.handleSubmit = this.handleSubmit.bind(this);
        }
    
    handleusernameChange = event => {
        this.setState ({
            username: event.target.value,
           
        });
    }
    handlepasswordChange = event => {
        this.setState ({
            password: event.target.value,
           
        });
    }

    handleSubmit = event => { 
        event.preventDefault();
        console.log(this.state.username);
       if(this.state.username === "Admin" && this.state.password === "admin")
       this.props.history.push("/home");
       else
       alert("try again");
    }
  
  
  render() {
    return (
     <div id="loginpage"> 
        <form onSubmit = {this.handleSubmit}>
                <div className="form-group">
                    <label for="exampleInputEmail1" id="label1">UserName</label>
                    <input type="text" className ="form-control" id="exampleInputEmail1" 
                        placeholder="Enter Username e.g. Admin"
                        value    = {this.state.username}
                        onChange = {this.handleusernameChange}
                    />
                </div>
                <div className="form-group">
                    <label for="exampleInputPassword1" id="label2">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" 
                    placeholder="Password e.g. admin"
                    value =    {this.state.password}
                    onChange = {this.handlepasswordChange}
                    />
                
                </div>
                
                <button type="submit" className="btn btn-primary" id="btn">Submit</button>
                
            </form>
      </div>  
    );
  }
}

export default Login;
