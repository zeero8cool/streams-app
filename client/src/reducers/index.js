import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import AuthReducer from './AuthReducer';
import streamsReducer from './streamsReducer';

export default combineReducers({
  auth: AuthReducer,
  form: formReducer,
  streams: streamsReducer,
});
