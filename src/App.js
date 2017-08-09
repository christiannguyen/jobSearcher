import React, { Component } from 'react';
import './App.css';
// var axios = require('axios'); 
import axios from 'axios';
import Search from './components/Search';
import Header from './components/Header';
import Joblist from './components/Joblist';
// import Filter from './components/Filter';


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
      jobs: [],
      locationfilter: [],
      height: window.innerHeight,
      tipsList: ['Stay motivated.','Sell Yourself.','Don’t Limit Yourself to Online Applications.','Be Yourself.', 
            'Stay Positive.', 'Networking is an essential component of successful job hunting.', 'It’s acceptable to apply for the same job more than once.','Learn the STAR method.',
            'Don’t stop applying for jobs.'
            ],
      tipsPosition: Math.floor(Math.random() * 9)
    };
  }

  componentWillMount(){
    this.fetchJobs(' ',' ','',12);
    this.fetchCities();
  }

  componentDidMount(){
    this.updateTips();
  }

  fetchCities(){
    axios.get('https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json')
      .then(response => {
        const locationfilter = response.data.map(x => x);
        this.setState({locationfilter});
        // console.log('location state', this.state.locationfilter);
      });
    }

  fetchJobs = (title,location,position) => {
    
    const config = {
      headers: {'X-Mashape-Authorization': 'E1L7w8FFovmshox2kJWK2tZWjnD3p1prLkUjsn9QJHoI0lQyc8'}
      };
//    axios.get('https://indeed-indeed.p.mashape.com/apisearch?publisher=1483245056846548&callback=<required>&chnl=<required>&co=<required>&filter=<required>&format=json&fromage=<required>&highlight=<required>&jt=<required>&l=austin%2C+tx&latlong=<required>&limit=25&q=java&radius=50&sort=<required>&st=<required>&start=<required>&useragent=<required>&userip=<required>&v=2',config)  
      axios.get(`https://indeed-indeed.p.mashape.com/apisearch?publisher=1483245056846548&callback=<required>&chnl=<required>&co=<required>&filter=<required>&format=json&fromage=<required>&highlight=<required>&jt=${position}&l=${location}&latlong=<required>&limit=1000&q=${title}&radius=50&sort=<required>&st=<required>&start=<required>&useragent=<required>&userip=<required>&v=2`,config)
      .then( response => {
        const jobTitle = response.data.results.map(x => <div>{x.jobtitle}</div>);
        const snippet = response.data.results.map(x => x.snippet);
        const location = response.data.results.map(x => x.formattedLocationFull);
        const url = response.data.results.map(x => x.url);
        const datePosted = response.data.results.map(x => x.date);
        const dateSince = response.data.results.map(x => x.formattedRelativeTime);

        response.data.results.sort((x,y) => x.formattedRelativeTime.substring(0,2) - y.formattedRelativeTime.substring(0,2));

        const jobs = response.data.results.map((x,index) => 
        <div className="diff-jobs-container container-fluid">
          <div className="row info">
            <h2 className="job-name" key={x.jobtitle} >{x.jobtitle}<span className="date-posted-since">{x.formattedRelativeTime}</span></h2>
            <h3 className="company-name" key={x.company}>{x.company}<span className="company-location"> {x.formattedLocationFull}</span></h3>
            <p className="date-posted" key={x.date.substring(0,17)}>Date Posted: {x.date.substring(0,17)}</p>
          </div>
          <div className="row short-description">
            <p key={x.snippet.substring(0,3)}>{x.snippet}</p>
          </div>
          <div className="row url-link">
            <a key={x.url} href={x.url} target="_blank" className="job-url">Posting</a>
          </div>
        </div>);        
        
        this.setState({ 
          jobTitle,
          snippet,
          location,
          url,
          datePosted,
          dateSince,
          jobs
        });
        
        const windowHeight = document.getElementsByClassName('joblist-container')[0].offsetHeight;
        this.setState({
          height: windowHeight
        })
    });  
  }

  updateTips = () => {
    	let tipsPos = 0;
			let len = this.state.tipsList.length;
			setInterval(() => {
        let tipsPosition = Math.floor(Math.random() * len);
        this.setState({
            tipsPosition
        });
			},4000);
  }

  render() {
    return (
      <div className="app-container">
        <Header tips={this.state.tipsList[this.state.tipsPosition]}/>
        <Search fetchJobs={this.fetchJobs} joblistHeight={this.state.height}/>
        <Joblist jobs={this.state.jobs} />
      </div>
    );
  }
}

export default App;
