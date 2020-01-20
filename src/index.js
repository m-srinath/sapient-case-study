import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import Bootstrap from 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import HomePage from './HomePage';
import logger from 'redux-logger';
import {characterReducer} from './reducer';



const middleware = [logger];

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const store = createStore(
  characterReducer,
  composeEnhancers(applyMiddleware(...middleware))
);

const App = () => {
  return (
    <Provider store= { store }>
      <HomePage/>
    </Provider>
  )
};

ReactDOM.render(<App />, document.querySelector("#root"));