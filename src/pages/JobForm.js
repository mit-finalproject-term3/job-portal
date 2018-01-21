import React, { Component } from 'react';



export default function JobForm({onSubmit}) {

  function handleFormSubmission(event){
    event.preventDefault();
    console.log('called handleJobSubmission')
    const {elements}= event.target;
    const title =elements["title"].value;
    const sallary = elements["sallary"].value;
    const description = elements["description"].value;
    console.log('in handleJobSubmission aboout to call on submit')
    onSubmit({title, sallary, description});

  }

console.log('loaded JobForm')

return (
  <div id="my-form">
    <form onSubmit={handleFormSubmission}>
      <label>
        Title
        &nbsp;
        <input type="text" name="title" />
      </label>
      <label>
        sallary
        <input type="number" name="sallary"/>
      </label>
      <label>
        Description
        <input type="text" name="description"/>
      </label>

      <button id="my-form-button" type="submit"> Create Job!</button>
    </form>
  </div>
  )
}
