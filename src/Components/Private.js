import React from 'react';
import { Redirect } from 'react-router-dom';
import isAuthenticated from '../Auth/isAuthenticated';

const Private = (props) => (
  !isAuthenticated() ? (
    <Redirect to={{
      pathname: '/login',
      state: { from: props.location }
    }} />
  ) : null
)

export default Private;