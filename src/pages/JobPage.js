import React, { Component } from 'react';
import '../App.css';
import Header from '../Components/JobHeader';
import Job from '../Components/Job';





class JobPage extends Component {
  render() {
    console.log(this.props.jobs)
    const { jobs } = this.props;
    return (
      <div className="App">
        <Header text="Find Your new career here!" />
        <p className="App-intro">To search for current job opportunities at MIT ...</p>

        <div className="jobs">
          {
            jobs ? (
              Object
                .keys(jobs)
                .map(key => <Job key={key} job={jobs[key]} />)

            ) : ( null )
          }
        </div>
        <div className="Apply"><button onClick={this.loadAdditionalJobs}>Apply</button></div>


      </div>
    );
  }
}

export default JobPage;
