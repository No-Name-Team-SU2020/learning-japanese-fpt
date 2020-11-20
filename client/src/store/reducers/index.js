import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import uiReducer from './ui/uiReducer';
import userReducer from './user/user';
import adminQuestionListReducer from './admin/question';
import adminSubjectListReducer from './admin/subject';
import adminLessonListReducer from './admin/lesson';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
  adminQuestionList: adminQuestionListReducer,
  adminSubjectList: adminSubjectListReducer,
  adminLessonList: adminLessonListReducer
});

export default rootReducer;