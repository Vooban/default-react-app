import React from 'react';
import { Redirect, Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import HomePage from './home/HomePage';
import NotFoundPage from './errors/NotFoundPage';

const WrappedRoute = ({ component, ...rest }) => (
  <Route {...rest} render={props => <App {...rest}>{React.createElement(component, ...rest, props)}</App>} />
);

const AppRouter = () => (
  <Router>
    <Switch>
      <WrappedRoute exact path="/" component={HomePage} />
      <WrappedRoute exact path="/404" component={NotFoundPage} />
      <Redirect to="/404" />
    </Switch>
  </Router>
);

export default AppRouter;
