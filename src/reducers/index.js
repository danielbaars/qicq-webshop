import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import cartContentsReducer from './cartContentsReducer';

const rootReducer = combineReducers({
  cartContents: cartContentsReducer,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
