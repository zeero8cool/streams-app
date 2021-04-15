import _ from 'lodash';
import {
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  UPDATE_STREAM,
  DELETE_STREAM,
} from '../actions/types';

const streamsReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case UPDATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload); //remove stream by Id
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') }; //... to create an object contains the big object returned by mapKeys
    default:
      return state;
  }
};
export default streamsReducer;
