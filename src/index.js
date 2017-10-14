import React from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import cartContentsReducer from './reducers/cartContentsReducer';
import customerInfoReducer from './reducers/customerInfoReducer';
import './style/style.sass';
require('./favicon.ico');

const history = createHistory();

const middleware = routerMiddleware(history);

const rootReducer = combineReducers({
  cartContents: cartContentsReducer,
  routing: routerReducer,
  form: formReducer,
  customerInfo: customerInfoReducer
});

const store = createStore(rootReducer, applyMiddleware(middleware));

render(
  <AppContainer>
    <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./components/Root', () => {
    const NewRoot = require('./components/Root').default;
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
