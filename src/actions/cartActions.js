import * as types from '../constants/actionTypes';

export function addOrder(input) {
  return {
    type: types.ADD_TO_CART,
    payload: input
  }
}

export function removeProduct(index) {
  return {
    type: types.REMOVE_PRODUCT,
    payload: index
  }
}

export function removeOption(productIndex, optionIndex) {
  return {
    type: types.REMOVE_OPTION,
    productIndex,
    optionIndex
  }
}

export function emptyCart() {
  return {
    type: types.EMPTY_CART
  }
}
