import {ADD_CUSTOMER_INFO} from '../constants/actionTypes';

const customerInfo = (state = {}, action) => {
  switch (action.type) {
    case ADD_CUSTOMER_INFO:
      console.log('Inside reducer is:', action.payload);
      // store.dispatch(push('/nextstep'));
      // history.push('/nextstep');
      return action.payload;
    default:
      return state;
  }
};

export default customerInfo;
