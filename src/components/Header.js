import React, { Component } from 'react';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            tips:[]
        }
    }
    render(){
        return(
            <div className="header-container">
                <h1> JobHunter</h1>
            </div>
        );
    }
}

export default Header;