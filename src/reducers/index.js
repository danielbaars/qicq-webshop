import { combineReducers } from 'redux';
import dataReducer from './dataReducer';
import cartContentsReducer from './cartContentsReducer';
import { routerReducer } from 'react-router-redux';

// import {
//   REQUEST_DATA,
//   RECEIVE_DATA
// } from '../actions/dataActions';
//
// function data(
//   state = {
//     isFetching: false,
//     data: {}
//   }, action){
//
//   }
//
// import axios from 'axios';
// const DATA_URL = '../data/qicqBikes.json';
//
// axios.get(DATA_URL).then(response => {
//   _this.setState({
//     data: response.data
//   });
// });

const rootReducer = combineReducers({
  data: dataReducer,
  cartContents: cartContentsReducer,
  routing: routerReducer
});

export default rootReducer;
