import React, { Component } from 'react';

class Header extends Component{
    render(){
        return(
            <div className="header-container">
                <h1> Welcome to Job Searcher!</h1>
                <p> Input your requested job title (ex: software engineer, teacher, etc)
                and location below. Location can be expressed as either zip code or city, state.
                It could also be expressed as either only the city or only the state.</p>
            </div>
        );
    }
}

export default Header;