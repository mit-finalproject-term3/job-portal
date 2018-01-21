import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Auth0Lock from 'auth0-lock';
import { AUTH_CONFIG } from './auth0-variables';
import {
  setAccessToken,
  setIdToken,
  isLoggedIn
} from '../../services/authService';

class Lock extends Component {
  lock = new Auth0Lock(AUTH_CONFIG.clientId, AUTH_CONFIG.domain, {
    auth: {
      responseType: 'token id_token',
      sso: false
    },
    theme: {
      primaryColor: '#3a99d8'
    }
  });

  constructor(props) {
    super(props);
    this.onAuthenticated = this.onAuthenticated.bind(this);
    this.onAuthenticated();
  }

  onAuthenticated() {
    this.lock.on('authenticated', authResult => {
      setAccessToken(authResult.accessToken);
      setIdToken(authResult.idToken);
    });
  }

  componentDidMount() {
    // Avoid showing Lock when hash is parsed.
    if (!/access_token|id_token|error/.test(this.props.location.hash)) {
      this.lock.show();
    }
  }

  render() {
    const style = { marginTop: '32px' };
    return <div id={AUTH_CONFIG.container} style={style} />;
  }
}

export default Lock;
