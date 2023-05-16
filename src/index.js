// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './App.css';
// import App from './App';
// // import reportWebVitals from './reportWebVitals';
// import { legacy_createStore as createStore } from 'redux';
// import Loginreducer from './Redux/Reducer';
// import { Provider } from 'react-redux';
// import { BrowserRouter } from 'react-router-dom';

// import { combineReducers } from "redux";
// import LoginReducer from './Redux/Reducer';

// const rootReducer = combineReducers({
//   Login: LoginReducer,
// });
// const root = ReactDOM.createRoot(document.getElementById('root'));
// const store = createStore(rootReducer)
// root.render(
//   <BrowserRouter>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </BrowserRouter>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// // reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import App from "./App";
import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import LoginReducer from './Redux/Reducer';
import userReducer from './Redux/Users/UserReducer';

const rootReducer = combineReducers({
  login: LoginReducer,
  user: userReducer
});

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(rootReducer, applyMiddleware(thunk))

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
