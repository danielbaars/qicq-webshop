export const REQUEST_DATA = 'REQUEST_DATA';
export const RECEIVE_DATA = 'RECEIVE_DATA';

export const fetchPosts = (url) => {
  return {
    type: REQUEST_DATA,
    url
  }
};

export const receivePosts = (json) => {
  return {
    type: RECEIVE_DATA,
    data: json
  }
};
