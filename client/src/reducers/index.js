import {combineReducers} from 'redux';
import authReducer from './AuthReducer';
import streamReducer from './StreamReducer';
import {reducer as formReducer} from 'redux-form';
export default combineReducers({
   auth:authReducer,
   form:formReducer,
   streams: streamReducer
});