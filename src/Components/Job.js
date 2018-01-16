import React, { Component } from 'react';
import More from '../pages/More'
import {
BrowserRouter as Router,
Route,
Link,
Switch
} from 'react-router-dom'

class Job extends Component {


render() {
return (

    <div className="job">
      <Link to='/more'>
      <h2>{ this.props.meta.title }</h2>
      </Link>
      <div><img width="200" src={ this.props.meta.poster } /></div>
      <p>({ this.props.meta.sallary })</p>
      <p>{ this.props.meta.description }</p>
    </div>



);
}
}

export default Job;
