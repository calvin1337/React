import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, } from "redux";
import App from './App';
import reducer from "../src/store/reducers/blog";
import thunk from "redux-thunk"

const rootReducer = reducer 


const store = createStore(rootReducer, compose(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
      <App />
  </Provider>
);


ReactDOM.render(
  
    app,
  document.getElementById('root')
);

