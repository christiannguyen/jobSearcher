import React, { Component } from 'react';
import './App.css';
var axios = require('axios'); 
import Search from './components/Search';
import Header from './components/Header';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      listing: ['']
    }
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
      .then(function(response){
        // this.state.listing ? 'empty' : 'not empty';
        console.log(response.data);
        console.log(response.data.results);
    });  
  }

  render() {
    return (
      <div className="app-container">
        <Header />
        <Search fetchJobs={this.fetchJobs.bind(this)}/>
      </div>
    );
  }
}

export default App;
