import {ADD_TO_CART, REMOVE_PRODUCT, EMPTY_CART, REMOVE_OPTION} from '../constants/actionTypes';

const cartContents = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    case REMOVE_PRODUCT:
      return state.filter((item, index) => index !== action.payload);
    case REMOVE_OPTION:
      const newOptions = state[action.productIndex].options.filter((item, index) => index !== action.optionIndex);
      const newProductObj = {...state[action.productIndex], options: newOptions};
      const newState = Object.assign([], state, {[action.productIndex]: newProductObj});
      return newState;
    case EMPTY_CART:
      return [];
    default:
      return state;
  }
};

export default cartContents;
