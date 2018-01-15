import React, { Component } from 'react';

class AddJob extends Component {
  render() {
    return (
      <form className="Job-form" onSubmit={(e) => this.addNewJob(e)}>
        <p>Add a Job</p>
        <input ref={ ( input ) => this.title = input } type="text" placeholder="Title" />
        <input ref={ ( input ) => this.sallary = input } type="text" placeholder="Sallary" />
        <input ref={ ( input ) => this.poster = input } type="text" placeholder="Resume" />
        <textarea ref={ ( input ) => this.description = input} placeholder="Description">
        </textarea>
        <button type="submit" >Add Job </button>

      </form>

    );

  }
  addNewJob(e) {
    e.preventDefault();
    var job =  {
      title: this.title.value,
      sallary: this.sallary.value,
      description: this.description.value,
      poster: this.poster.value
    };
    this.props.addJob( job );
  }
}

export default AddJob;
