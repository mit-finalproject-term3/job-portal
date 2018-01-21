<<<<<<< HEAD

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Components/Header';
import Top from './Components/Top';
import Private from './Components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import './App.css';

const App = () => {
  return(
    <div>
      <img src="MITlogo.png" alt="logo" className="MITlogo" />
      <Header />
      <main>
        <Switch>
        <Route exact path="/" component={Top} />
        <Route path="/private" component={Private} />
        <Route path="/login" component={Login} />
        <Route path="logout" component={Logout} />
        </Switch>
      </main>
    </div>
  )
}

export default App
=======
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import store from './store';
import FixedButton from './components/FixedButton';
import SideNav from './components/SideNav';
import SearchPage from './components/SearchPage'
import PostAJob from './components/PostAJob';
import AboutPage from './components/AboutPage'
//import PrivateRoute from './containers/PrivateRoute';

const {dispatch} =  store;
class App extends Component {
  constructor() {
    super();

    this.openSideMenu = this.openSideMenu.bind(this);
  }

  openSideMenu() {
    document.getElementById('side-nav').style.width = '26em';
  }

  redirectToPostJobListing() {
    dispatch(push('/postjob'));
  }

  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const {match} = this.props;
    //const { isAuthenticated } = this.props.auth;
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
            MIT
          </Link>
        </h3>
        <div className="grid">
          <Switch>
            <Route path={match.path} exact component={SearchPage} />
            <Route path="/postjob" component={PostAJob} />
            <Route path="/about" component={AboutPage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
>>>>>>> 6aa9119ec0e321cc40e8cb40a865d55eec1b9804
