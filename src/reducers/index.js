import { combineReducers } from 'redux';
import cartContentsReducer from './cartContentsReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  cartContents: cartContentsReducer,
  routing: routerReducer
});

export default rootReducer;
