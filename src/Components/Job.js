import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Job extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="job">
        <Link to='/jobdetails'>
        <h2>{ this.props.meta.title }</h2>
        </Link>
        <div><img width="200" src={ this.props.meta.poster } /></div>
        <p>{ this.props.meta.sallary }</p>
        <p>{ this.props.meta.description }</p>
      </div>
    );
  }
}

export default Job;
