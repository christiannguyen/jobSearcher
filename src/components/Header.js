import React, { Component } from 'react';

class Header extends Component{
    render(){
			return(
				<div className="header-container">
					<h1> JobQuest</h1>
					<p>{this.props.tips}</p>
				</div>
			);
    }
}

export default Header;