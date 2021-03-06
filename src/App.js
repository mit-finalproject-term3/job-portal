import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import store from './store';

// import SideNav from './components/SideNav';
import SearchPage from './components/SearchPage';
import PostAJob from './components/PostAJob';
import ApplyForm from './components/ApplyForm';
import AboutPage from './components/AboutPage';
import Contact from './components/Contact';
import Private from './components/Private';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import './App.css';
//import PrivateRoute from './containers/PrivateRoute';

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

        <div className="content-wrapper">
          <Switch>
            <Route path={match.path} exact component={SearchPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/postajob" component={PostAJob} />
            <Route path="/mainpage" component={Mainpage} />
            <Route path="/private" component={Private} />
            <Route path="/contact" component={Contact} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
            <Route path="/applyform" component={ApplyForm} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
