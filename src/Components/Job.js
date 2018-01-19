import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Job extends Component {
  render() {
    console.log('in Jobs component with props: ', this.props);
    const { job } = this.props
    let jobUrl = `/jobdetails/${job._id}`;
    return (
      <div className="job">
        <Link to={jobUrl}>
        <h2>{ this.props.job.title }</h2>
        </Link>
        <div><img width="200" src={ this.props.job.poster } /></div>
        <p>{ this.props.job.sallary }</p>
        <p>{ this.props.job.description }</p>
      </div>
    );
  }
}

export default Job;
