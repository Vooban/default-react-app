import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/AppRouter';
import axios from 'axios';
import i18nConfig from './__i18n__';
import i18n from 'i18next';
import reducers from './reducers';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

let middlewares = [ReduxThunk];

if (process.env.NODE_ENV === 'development') {
  middlewares = [require('redux-immutable-state-invariant').default(), ...middlewares];
}

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(...middlewares));
const store = createStore(reducers, {}, enhancer);

const renderApplication = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppRouter />
    </Provider>,
    document.getElementById('root')
  );
};

i18n.init(i18nConfig, () => {
  renderApplication();
});
