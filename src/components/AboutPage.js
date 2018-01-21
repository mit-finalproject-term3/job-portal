import React, { Component } from 'react';

export default class AboutPage extends Component {
  render() {
    return (
      <div>
        <h1 className="heading">About</h1>
        <p className="justify">
          Sometimes you just wish that people would actually post some
          Internships, Entry or Junior level positions to apply. You wish that
          job boards wouldn't be filled with only Mid and above level engineers
          or even worse, Junior positions that require you to have 3+ years
          experience, because filtering unskilled talent by saying 3+ years
          isn't an excuse. Because talent that haven't gotten their foot in the
          door yet, are also filtered. If things like those resonates with you.
          Then welcome, because this is a site that welcomes you. The talented,
          the skilled, the overshadowed.
        </p>
        <div className="space" />

        <h1 className="heading">Navigation Help</h1>
        <p className="justify">
          I hope this site hasn't been too difficult to navigate. If for some
          reason you had trouble hopefully some of the information below helps.
          If you'd like to contact me, you can find my contact information at
          the bottom of this page.
        </p>
        <div className="small-space" />

        <h3>Search Bar</h3>
        <p className="justify">
          Type a keyword in the search bar in the homepage. This will allow you
          to sort through job listings. Good Luck on your job search!
        </p>
        <div className="small-space" />

        <h3>Main Floating Buttons</h3>
        <p className="justify">
          The top left button is the menu button. Pressing the menu button will
          slide in a menu for additional options.
        </p>
        <p className="justify">
          The second top left button is the job post button. Pressing the post
          button will allow you to post a job onto the job board. People with
          talent will then see your job post and apply.
        </p>
        <div className="space" />

        <h1 className="heading">Contact</h1>
        <div className="large-space" />
      </div>
    );
  }
}
