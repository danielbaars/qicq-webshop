import * as types from '../constants/actionTypes';

export function addCustomerInfo(input) {
  // history.push('/nextstep');
  return {
    type: types.ADD_CUSTOMER_INFO,
    payload: input
  }
}
