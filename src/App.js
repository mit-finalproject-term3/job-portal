import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Top from './Components/Top';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Job from './Components/Job';
import JobPage from './pages/JobPage';
import JobForm from './pages/JobForm';
import * as jobsAPI from './api/jobs'

// import {initialJobs} from './jobs';
// import {additionalJobs} from './jobs';

class App extends Component {

  constructor() {
    super();

    this.state = {
      // // Load fake data on page load
      // jobs: initialJobs
      jobs: null
    };
    // this.loadAdditionalJobs = this.loadAdditionalJobs.bind(this);
    // this.addJobToGallery = this.addJobToGallery.bind( this );
  }

  componentDidMount() {

    //Sends a request from the front-end via the proxy to the back-end at localhost:7000/jobs
    fetch('/jobs.json', {
      method: 'GET',
      // TODO - Add Headers with Token
      headers: {
        'Content-Type': 'application/json',
      }
    })
    .then(res => {
      return res.json();
    })
    .then(jobsData => {
      console.log('Received jobsData object from the back-end', jobsData);
      console.log('Get the array of jobs value from the jobs key in the jobsData object', jobsData.jobs);
      this.setState({ jobs: jobsData.jobs });
    })
    .catch(error => { console.log(error) })
  }


  // loadAdditionalJobs = () => {
  //   var currentJobs = { ...this.state.jobs };
  //   var newJobs = Object.assign( currentJobs, additionalJobs );
  //   this.setState({ jobs: newJobs });
  // }


  handleJobSubmission = (job) => {
    console.log('in parent App.js handleJobSubmission aboout to set state ')
    this.setState(({jobs})=>(
      {jobs:[ job ].concat(jobs) }
    ));
    jobsAPI.save(job);

  }

  render() {
    const { jobs } = this.state;

    return(
      <div>
        <main>
          {
            !!jobs ? (
              <Switch>
                <Route exact path="/" render={routeProps => {
                  console.log('loading the root route')
                  return (
                    <JobPage jobs={jobs} />

                  )
                }} />

                <Route path='/jobdetails/:id' render={
                  ({ match }) => {
                    console.log('in jobdetails with id: ', match.params.id);
                    console.log(match)
                    const id = match.params.id
                    const job = jobs.find((job) => job._id === id)
                    if (!job) {
                      return (<p>Job Not Found! ({id})</p>)
                    }
                    return (<Job job={job} />)
                  }
                } />

                <Route path='/jobapplication/:id' render={
                  ({ match }) => {
                    console.log('in jobapplication with id: ', match.params.id);
                    console.log(match)
                    const id = match.params.id
                    const job = jobs.find((job) => job._id === id)
                    if (!job) {
                      return (<p>Job Not Found! ({id})</p>)
                    }
                    return (<Job job={job} />)
                  }
                } />


                <Route path="/private" component={Private} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />

              </Switch>
            ) : ( "Loading Jobs..." )
          }

            <JobForm onSubmit={this.handleJobSubmission}/>
        </main>

      </div>
    )
  }
}

export default App
