import React, { Component } from 'react';



export default function JobApplication({onSubmit}) {

  function handleJobApplicationFormSubmission(event){
    event.preventDefault();
    console.log('called handleJobApplicationFormSubmission')
    const {elements}= event.target;
    const name=elements["name"].value;
    const resume = elements["resume"].value;
    //const description = elements["description"].value;
    console.log('in handleJobApplicationFormSubmission aboout to call on submit')
    onSubmit({name, resume});
  }

console.log('loaded JobApplicationSubmissionForm')

return (
  <div id="my-form">
    <form onSubmit={handleJobApplicationFormSubmission}>
      <label>
        Title
        &nbsp;
        <input type="text" name="Name" />
      </label>
      <label>
        sallary
        <input type="resume" name="resume"/>
      </label>
      <button id="my-form-button" type="submit"> Create Job!</button>
    </form>
  </div>
  )
}
