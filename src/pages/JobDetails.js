import React, { Component } from 'react';
import Header from '../Components/JobHeader';

class JobDetails extends Component {
  render() {
    return (
        <div className="jobdetails">
          <Header />
          <h2>{ this.props.meta.title }</h2>
          <p>({ this.props.meta.sallary })</p>
          <p>{ this.props.meta.description }</p>

        </div>
    );
    }
}
 export default JobDetails
