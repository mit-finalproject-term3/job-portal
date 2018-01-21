import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import FixedButton from './components/FixedButton';
import SideNav from './components/SideNav';

class App extends Component {
  constructor() {
    super();

    this.openSideMenu = this.openSideMenu.bind(this);
  }

  openSideMenu() {
    document.getElementById('side-nav').style.width = '26em';
  }

  redirectToPostJobListing() {
    push('/postajob');
  }

  render() {
    return (
      <div className="App">
        <FixedButton
          id="navbar-menu-button"
          source="navbar-menu.png"
          callback={this.openSideMenu}
        />
        <SideNav />
        <FixedButton
          id="post-listing"
          source="upload.svg"
          callback={this.redirectToPostJobListing}
        />
        <h3 className="black-logo-title">
          <Link className="black" to="/home">
            A JUNIOR DEV
          </Link>
        </h3>
        <div className="grid">{this.props.children}</div>
      </div>
    );
  }
}

export default App;
