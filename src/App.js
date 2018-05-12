import React, { Component } from 'react';
import './App.css';
import Titles from './components/titles';
import Weather from './components/weather'; 
import Form from './components/form';
import Main from './components/main';
import Login from './components/login';
import {BrowserRouter as Router, Route} from 'react-router-dom';

const API_KEY = "005b7ece41ac24f75b54efcfb92eedd0";

  class App extends Component {
    render(){
      return(
        <Router>
            <div>
                <Route exact  path = "/"  component={Login} />
                <Route path = "/home"     component={Main} />
            </div>
        </Router>
        
        
      );
    }
    
  
}

export default App;


