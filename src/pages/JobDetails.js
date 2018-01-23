import React, { Component } from 'react';
import Header from '../Components/JobHeader';

// import Job from '../Components/Job';

class JobDetails extends Component {
  render() {
    const { jobs } = this.props;
    console.log('in JobDetails with: ', jobs)

    const jobItems = () => {
      return (
        Object.keys(jobs)
          .map(key => {
            return (
              <li key={1}>
                <h2> {jobs[key].title} </h2>
                <p> {jobs[key].sallary} </p>
                <p> {jobs[key].description} </p>

              </li>

            )
          })
      )
    }
    return (
      <div className="jobdetails">
        <Header />
        <div className="Apply"><button>Apply</button></div>
        <ul>

          {jobItems()}

        </ul>

      </div>
    );
  }
}
 export default JobDetails
