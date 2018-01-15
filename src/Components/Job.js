import React, { Component } from 'react';

class Job extends Component {

  render() {
    return (
      <div className="job">
        <h2>{ this.props.meta.title }</h2>
        <div><img width="200" src={ this.props.meta.poster } alt="job-pic"/></div>
        <p>({ this.props.meta.year })</p>
        <p>{ this.props.meta.description }</p>
      </div>
    );
  }
}

export default Job;
