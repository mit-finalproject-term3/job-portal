import React, { Component } from 'react';

class Job extends Component {


render() {
return (

    <div className="job">

      <h2>{ this.props.meta.title }</h2>
      <p>({ this.props.meta.sallary })</p>
      <p>{ this.props.meta.description }</p>

    </div>

);
}
}
