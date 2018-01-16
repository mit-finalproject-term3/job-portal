import React, { Component } from 'react';
import '../App.css';
import Header from './JobHeader';
import Job from './Job';

import {initialJobs} from '../jobs';
import {additionalJobs} from '../jobs';

import AddJob from './AddJob';





class App extends Component {

  constructor() {


    super();

    this.state = {
      jobs: initialJobs
      // DO NOT USE CURL BRUCKETS FOR THIS
    };
    this.loadAdditionalJobs = this.loadAdditionalJobs.bind(this);
    this.addJobToGallery = this.addJobToGallery.bind( this );
  }

  render() {
    return (

      <div className="App">
        <Header text="Find Your new career here!" />
        <p className="App-intro">To search for current job opportunities at MIT ...</p>


        <div className="jobs">
          {
            Object
            .keys(this.state.jobs)
            .map(key => <Job key={key} meta={this.state.jobs[key]} />)
          }

        </div>

        <div className="add-jobs"><button onClick={this.loadAdditionalJobs}>Load more...</button></div>

        <AddJob addJob={this.addJobToGallery} />      </div>

    );
  }
  loadAdditionalJobs() {
    var currentJobs = { ...this.state.jobs };
    var newJobs = Object.assign( currentJobs, additionalJobs );
    this.setState({ jobs: newJobs });
  }

  addJobToGallery( job ) {
    var ts = Date.now();
    var newJob = {};
    newJob[ 'job' + ts ] = job;
    var currentJobs = { ...this.state.jobs };
    var newJobs = Object.assign( currentJobs, newJob );
    this.setState({ jobs: newJobs });
  }
}

export default App;
