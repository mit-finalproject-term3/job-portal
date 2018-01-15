import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Job extends Component {

  render() {

    return (
      <div className="job">
        <div><img width="200" src={ this.props.meta.poster } alt="job-pic"/></div>
        <p>({ this.props.meta.year })</p>
        <p>{ this.props.meta.description }</p>
      </div>
    );
  }
}

export default Job;
