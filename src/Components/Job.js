import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Job extends Component {
  render() {
    console.log('in Jobs component with props: ', this.props);
    const { job } = this.props
    let jobUrl = `/jobdetails/${job._id}`;
    console.log('current url is: ', window.location.href);
    return (
      <div className="job">
        {
          // if the window object is defined
          // and if 'jobdetails' is part of the current url (i.e. not the root url)
          // then show the button, otherwise don't show the button
          !!window && /jobdetails/.test(window.location.href) ? (
            <div className="Apply"><button>Apply</button></div>
          ) : ( null )
        }
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
