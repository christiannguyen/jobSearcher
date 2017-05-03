import React, { Component } from 'react';


class Search extends Component{
    constructor(props){
        super(props);
        this.state = {
            title: '',
            location: ''
        }
    }
    handleTitleChange(event){
        this.setState({title: event.target.value})
    }
    handleLocationChange(event){
        this.setState({location: event.target.value})
    }

    updateJobSearch(){
        const title = this.state.title;
        const location = this.state.location;
        this.props.fetchJobs(title,location);
    }

    handleKeyPress(e){
        const title = this.state.title;
        const location = this.state.location;

        if(e.keyCode === 13)
            this.props.fetchJobs(title,location);
    }

    render(){
        return(
            <div onKeyDown={this.handleKeyPress.bind(this)} className="search-container">
                <div className="search">
                    <span className="right-inner-addon">
                        <i className="glyphicon glyphicon-briefcase"></i>
                        <input type="text" onChange={this.handleTitleChange.bind(this)} placeholder="Job Title" value={this.state.title}/>
                    </span>
                    <span className="right-inner-addon">
                        <i className="glyphicon glyphicon-globe"></i>
                        <input type="text" onChange={this.handleLocationChange.bind(this)} placeholder="City, State, or Zipcode" value={this.state.location}/>
                    </span>
                    <span>
                         <button onClick={this.updateJobSearch.bind(this)} className="search-button">Search</button>
                    </span>
                 </div>     
                { /*
                <input type="text" onChange={this.handleTitleChange.bind(this)} placeholder="Job Title" value={this.state.title}/>
                <input type="text" onChange={this.handleLocationChange.bind(this)} placeholder="Job Location" value={this.state.location}/>
                <button onClick={this.updateJobSearch.bind(this)} className="search-button">Search</button>
                */}
            </div>
        );
    }
}

export default Search;