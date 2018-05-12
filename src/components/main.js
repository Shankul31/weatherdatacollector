import React, { Component } from 'react';
//import './App.css';
import Titles from './titles';
import Weather from './weather'; 
import Form from './form';


const API_KEY = "005b7ece41ac24f75b54efcfb92eedd0";

  class Main extends Component {

    constructor(props){
      super(props);
       this.state = {
        temprature: undefined,
        city :  undefined,
        country : undefined,
        humidity :   undefined,
        description: undefined,
        error: undefined,
      };
    }
    
  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
      const data = await api_call.json();
      //console.log(data);
      
      if(city && country){
        this.setState({
          temprature : data.main.temp,
          city : data.name,
          country : data.sys.country,
          humidity : data.main.humidity,
          description : data.weather[0].description,
          error: ""
        });
      }else{
        this.setState({
          temprature : undefined,
          city : undefined,
          country : undefined,
          humidity : undefined,
          description : undefined,
          error: "Please enter the values."
        });
       }
    }

  render() {
    return (
      <div id = "homepage">
        <div className = "App">
          <Titles />
          <Form getWeather = {this.getWeather} />
          <Weather 
          temprature= {this.state.temprature}
          city = {this.state.city}
          country = {this.state.country}
          humidity = {this.state.humidity}
          description = {this.state.description}
          error = {this.state.error}
          />
        </div>
    </div>
    );
  }
}

export default Main;
