import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Top from './Components/Top';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import JobPage from './Components/JobPage';
import JobDetails from './pages/JobDetails'

import {initialJobs} from './jobs';
import {additionalJobs} from './jobs';

class App extends Component {

  constructor() {
    super();

    this.state = {
      jobs: initialJobs
    };
    // this.loadAdditionalJobs = this.loadAdditionalJobs.bind(this);
    // this.addJobToGallery = this.addJobToGallery.bind( this );
  }

  loadAdditionalJobs = () => {
    var currentJobs = { ...this.state.jobs };
    var newJobs = Object.assign( currentJobs, additionalJobs );
    this.setState({ jobs: newJobs });
  }

  addJobToGallery = ( job ) => {
    var ts = Date.now();
    var newJob = {};
    newJob[ 'job' + ts ] = job;
    var currentJobs = { ...this.state.jobs };
    var newJobs = Object.assign( currentJobs, newJob );
    this.setState({ jobs: newJobs });
  }

  render() {
    const { jobs } = this.state;

    return(
      <div>
        <main>
          <Switch>
            <Route exact path="/" render={routeProps => {
              return (
                <JobPage {...routeProps}
                  jobs={jobs}
                  loadAdditionalJobs={this.loadAdditionalJobs}
                  addJobToGallery={this.addJobToGallery}
                />
              )
            }} />
            <Route path='/jobdetails' render={routeProps => {
              return (
                <JobDetails {...routeProps}
                  jobs={jobs}
                />
              )
            }} />
            <Route path="/private" component={Private} />
            <Route path="/login" component={Login} />
            <Route path="logout" component={Logout} />
          </Switch>
        </main>
      </div>
    )
  }
}

export default App
