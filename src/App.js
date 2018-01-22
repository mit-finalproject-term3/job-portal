import Navbar from './Components/Navbar';
import Top from './Components/Top';
import Mainpage from './Components/Mainpage';
import './App.css';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { push } from 'react-router-redux';
import store from './store';
import SearchPage from './Components/SearchPage';
import PostAJob from './Components/PostAJob';
import AboutPage from './Components/AboutPage';

const { dispatch } = store;
class App extends Component {
  redirectToPostJobListing() {
    dispatch(push('/postjob'));
  }

  goTo(route) {
    this.props.history.replace(`/${route}`);
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  render() {
    const { match } = this.props;
    //const { isAuthenticated } = this.props.auth;
    return (
      <div className="App">
        <Navbar />
        <h3 className="black-logo-title">
          <Link className="black" to="/home">
            <img src="MITlogo.png" alt="logo" className="MITlogo" />
          </Link>
        </h3>
        <div className="grid">
          <Switch>
            <Route path={match.path} exact component={SearchPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/postajob" component={PostAJob} />
            <Route path="/mainpage" component={Mainpage} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
