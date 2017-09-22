import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import cartContentsReducer from './cartContentsReducer';
import customerInfoReducer from './customerInfoReducer';

const rootReducer = combineReducers({
  cartContents: cartContentsReducer,
  routing: routerReducer,
  form: formReducer,
  customerInfo: customerInfoReducer
});

export default rootReducer;
