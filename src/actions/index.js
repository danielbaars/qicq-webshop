import * as types from '../constants/actionTypes';

export function addOrder(input) {
  return {
    type: types.ADD_TO_CART,
    payload: input
  }
}
