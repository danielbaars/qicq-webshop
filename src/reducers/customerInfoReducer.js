import {ADD_CUSTOMER_INFO} from '../constants/actionTypes';

const customerInfo = (state = {}, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_INFO:
      return action.payload;
    default:
      return state;
  }
};

export default customerInfo;
