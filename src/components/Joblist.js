import React, { Component } from 'react';

class Joblist extends Component{
    render(){
        return(
            <div className="joblist-container">
                {this.props.jobs.map(x => x)}
            {/*
                <ul className="joblist">
                
                    {this.props.jobTitle.map((x,index) => <li key={index}>{x}</li>)}
                </ul>
            */}
            </div>
        );
    }
}

export default Joblist;