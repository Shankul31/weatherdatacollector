import React, {Component} from 'react';

export default class Weather extends Component{
    render(){
        return(
            <div>
                
                {this.props.city && this.props.country && <p className = "output">Location: 
                {this.props.city},{this.props.country}</p>}
                {this.props.temprature  && <p  className = "output"> Temparature: {this.props.temprature} </p>}
                {this.props.humidity    && <p  className = "output"> Humidity: {this.props.humidity} </p>}
                {this.props.description && <p className = "output"> Description: {this.props.description}</p>}
                {this.props.error && <p className = "output">{this.props.error}</p>}

            </div>

        );
    }
}