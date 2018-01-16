import React, { Component } from 'react';
import '../App.css';
import Header from './JobHeader';
import Job from './Job';

import AddJob from './AddJob';


class JobPage extends Component {

  handleLoadAdditionalJobs = (e) => {
    this.props.loadAdditionalJobs();
  }

  handleAddJobToGallery = (e) => {
    this.props.addJobToGallery();
  }

  render() {
    console.log(this.props.jobs)
    return (
      <div className="App">
      <Header text="Find Your new career here!" />
      <p className="App-intro">To search for current job opportunities at MIT ...</p>

      <div className="jobs">
        {
          Object
          .keys(this.props.jobs)
          .map(key => <Job key={key} meta={this.props.jobs[key]} />)
        }
      </div>

      <div className="add-jobs"><button onClick={this.loadAdditionalJobs}>Load more...</button></div>

      <AddJob addJob={this.addJobToGallery} />
      </div>
    );
  }
}

export default JobPage;
