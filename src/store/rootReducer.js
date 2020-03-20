import { combineReducers } from 'redux';
import userReducer from './auth/reducer';
import contactReducer from './contacts/reducer';

export default combineReducers({
  user: userReducer,
  contacts: contactReducer
});
