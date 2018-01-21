import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { push } from 'react-router-redux';
import Lock from './Lock';
import { isLoggedIn } from '../../services/authService';
import store from '../../store';
const { dispatch } = store;

class Login extends PureComponent {
  componentWillMount() {
    if (isLoggedIn()) {
      dispatch(push('/'));
    }
  }

  render() {
    return <Lock location={this.props.location} />;
  }
}

export default Login;
