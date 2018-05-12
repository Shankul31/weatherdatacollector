import React, {Component} from 'react';

export default class Form extends Component{
    render(){
        return(
            <form onSubmit = {this.props.getWeather}> 
                <input type = "text" className = "input1" name = "city" placeholder="Enter city e.g. London" />
                <input type = "text" className = "input2" name=  "country" placeholder="Enter country e.g. uk"/>
                <button type = "submit">Submit</button>
            </form>

        );
    }
}