import {ADD_TO_CART} from '../constants/actionTypes';

const cartContents = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
};

export default cartContents;
