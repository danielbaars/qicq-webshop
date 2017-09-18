import {REQUEST_DATA, RECEIVE_DATA} from '../actions/dataActions';

const data = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return state;
    case RECEIVE_DATA:
      return state;
    default:
      return state;
  }
};

export default data;
