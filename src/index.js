import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import history from './history';
import store from './store';
import PrivateRoute from './containers/PrivateContainer';
import Login from './containers/Auth/Login';
import About from './components/AboutPage';
import App from './App';

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

ReactDOM.render(
  <Provider store={store}>
    {/* ConnectedRouter will use the store from Provider automatically */}
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route exact path="/" component={App} />
        <PrivateRoute exact path="/" component={About} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

export default store;
