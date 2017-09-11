import {ADD_TO_CART, EMPTY_CART} from '../constants/actionTypes';

const cartContents = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case EMPTY_CART:
      return [];
    default:
      return state;
  }
};

export default cartContents;
