import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import uiReducer from './ui/uiReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer
});

export default rootReducer;