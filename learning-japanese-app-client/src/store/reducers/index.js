import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import uiReducer from './ui/uiReducer';
import userReducer from './user/user';
import adminQuestionListReducer, { findQuestionReducer } from './admin/question';
import adminSubjectListReducer from './admin/subject';
import adminLessonListReducer, { singleLessonReducer } from './admin/lesson';
import adminClassListReducer, { adminSingleClassReducer } from './admin/class';

const rootReducer = combineReducers({
  auth: authReducer,
  ui: uiReducer,
  user: userReducer,
  adminQuestionList: adminQuestionListReducer,
  adminSubjectList: adminSubjectListReducer,
  adminLessonList: adminLessonListReducer,
  singleLesson: singleLessonReducer,
  findQuestion: findQuestionReducer,
  adminClassList: adminClassListReducer,
  adminSingleClass: adminSingleClassReducer,
});

export default rootReducer;