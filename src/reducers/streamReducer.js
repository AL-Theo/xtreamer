//reads an action and determines what to do with the app state
import _ from 'lodash';
import {  
  CREATE_STREAM,
  FETCH_STREAMS,
  FETCH_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

//handling creating, fetching and updating a single stream
//we must pass actions to reducers, so it can determine what to do with the state of app app
export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM: 
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return  _.omit(state, action.payload);
    default: 
      return state;
  }
}