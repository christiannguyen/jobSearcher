import React, { Component } from 'react';


class Search extends Component{
    componentWillMount(){
        // this.canFetchMoreJobs();
    }

		handleChange = (e) => {
			e.preventDefault();
		}

    updateJobSearch = () => {
			const title = document.querySelectorAll('input')[0].value;
			const location = document.querySelectorAll('input')[1].value;				
			const s = document.getElementsByName('positions')[0];
			let position = s.options[s.selectedIndex].value;
			
			if(position === 'all')
					position = '';

			this.props.fetchJobs(title,location,position);
    }

    handleKeyPress = (e) => {
				const title = document.querySelectorAll('input')[0].value;
				const location = document.querySelectorAll('input')[1].value;				
        const s = document.getElementsByName('positions')[0];
        let position = s.options[s.selectedIndex].value;

        if(position === 'all')
            position = '';

        if(e.keyCode === 13){
            this.props.fetchJobs(title,location,position);            
        }
    }

    render(){
			return(
				<div onKeyDown={this.handleKeyPress} className="search-container">
					<div className="search row">
						<select name="positions">
							<option value="all">All</option>                        
							<option value="fulltime">Full-Time</option>
							<option value="parttime">Part-Time</option>
							<option value="internship">Internship</option>
							<option value="contract">Contract</option>
							<option value="temporary">Temporary</option>
						</select>
						<span className="right-inner-addon">
							<i className="glyphicon glyphicon-briefcase"></i>
							<input type="text" onChange={this.handleChange} placeholder="Job Title"/>
						</span>
						<span className="right-inner-addon">
							<i className="glyphicon glyphicon-globe"></i>
							<input type="text" onChange={this.handleChange} placeholder="City, State, or Zipcode"/>
						</span>
						<span>
							<button onClick={this.updateJobSearch} className="search-button">Search</button>
						</span>
					</div>     
				</div>
        );
    }
}

export default Search;