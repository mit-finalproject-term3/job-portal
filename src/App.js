import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
// import Header from './Components/Header';
// import Top from './Components/Top';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import Job from './Components/Job';
import JobPage from './Components/JobPage';
import JobDetails from './pages/JobDetails';

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

    // Sends a request from the front-end via the proxy to the back-end at localhost:7000/jobs
    fetch('/v1/jobs.json', {
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
          {
            !!jobs ? (
              <Switch>
                <Route exact path="/" render={routeProps => {
                  return (
                    <JobPage
                      jobs={jobs}
                    // loadAdditionalJobs={this.loadAdditionalJobs}
                    // addJobToGallery={this.addJobToGallery}
                    />
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


                <Route path="/private" component={Private} />
                <Route path="/login" component={Login} />
                <Route path="logout" component={Logout} />

              </Switch>
            ) : ( "Loading Jobs..." )
          }
        </main>
      </div>
    )
  }
}

export default App
