import React, { Component } from 'react';
import './App.css';
// var axios = require('axios'); 
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import Joblist from './components/Joblist';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobTitle: [],
      location: [],
      datePosted: [],
      dateSince: [],
      url: [],
      snippet: [],
      jobs: []
    };
    

    this.fetchJobs.bind(this);
  }

  componentWillMount(){
    this.fetchJobs('','');
  }

  fetchJobs(title, location){
    
    const config = {
      headers: {'X-Mashape-Authorization': 'E1L7w8FFovmshox2kJWK2tZWjnD3p1prLkUjsn9QJHoI0lQyc8'}
      };
//    axios.get('https://indeed-indeed.p.mashape.com/apisearch?publisher=1483245056846548&callback=<required>&chnl=<required>&co=<required>&filter=<required>&format=json&fromage=<required>&highlight=<required>&jt=<required>&l=austin%2C+tx&latlong=<required>&limit=25&q=java&radius=50&sort=<required>&st=<required>&start=<required>&useragent=<required>&userip=<required>&v=2',config)  
    axios.get(`https://indeed-indeed.p.mashape.com/apisearch?publisher=1483245056846548&callback=<required>&chnl=<required>&co=<required>&filter=<required>&format=json&fromage=<required>&highlight=<required>&jt=<required>&l=${location}&latlong=<required>&limit=25&q=${title}&radius=50&sort=<required>&st=<required>&start=<required>&useragent=<required>&userip=<required>&v=2`,config)
      .then( response => {
        // response.results.length === 0 ? console.log('empty') : console.log('not empty');
        // console.log(response.data);
        console.log(response.data.results);

        const jobTitle = response.data.results.map(x => <div>{x.jobtitle}</div>);
        const snippet = response.data.results.map(x => x.snippet);
        const location = response.data.results.map(x => x.formattedLocationFull);
        const url = response.data.results.map(x => x.url);
        const datePosted = response.data.results.map(x => x.date);
        const dateSince = response.data.results.map(x => x.formattedRelativeTime);
        const jobs = response.data.results.map((x,index) => 
        <div className="diff-jobs-container container-fluid">
          <div className="row info">
            <h2 className="job-name" key={x.jobtitle} >{x.jobtitle}</h2>
            <h3 className="company-name" key={x.company}>{x.company}</h3>
          </div>
          <div className="row short-description">
            <p key={x.snippet.substring(0,3)} >{x.snippet}</p>
          </div>
        </div>);        
        

        // console.log('jobtitle', jobTitle);
        // console.log('blah';
        this.setState({ 
          jobTitle,
          snippet,
          location,
          url,
          datePosted,
          dateSince,
          jobs
        });
        console.log(this.state.jobs);
        
    });  
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Search fetchJobs={this.fetchJobs.bind(this)}/>
        <Joblist jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
