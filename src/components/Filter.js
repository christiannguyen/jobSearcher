import React, { Component } from 'react';
import axios from 'axios';

//https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json
class Filter extends Component{
    constructor(props){
        super(props);
        this.state = {
            filteredCity: []
        }
    }
    handleChange(e){
        this.setState({filteredCity: e.target.value});
    }
    render(){
        return(
            <div className="filter-search-container">
                    <input type="radio" name="gender" value="female" /> 
                    <input type="radio" name="gender" value="other" /> 
            </div>
        );
    }
}

export default Filter;  