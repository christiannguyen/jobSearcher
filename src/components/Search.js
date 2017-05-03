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

    render(){
        return(
            <div className="search-container">
                <input type="text" onChange={this.handleTitleChange.bind(this)} placeholder="Job Title" value={this.state.title}/>
                <input type="text" onChange={this.handleLocationChange.bind(this)} placeholder="Job Location" value={this.state.location}/>
                <button onClick={this.updateJobSearch.bind(this)} className="btn btn-default"> Search </button>
            </div>
        );
    }
}

export default Search;