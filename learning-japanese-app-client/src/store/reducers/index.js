import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import uiReducer from './ui/uiReducer';
import userReducer from './user/user';
import adminQuestionListReducer, { findQuestionReducer } from './admin/question';
import adminSubjectListReducer from './admin/subject';
import adminLessonListReducer, { singleLessonReducer } from './admin/lesson';
import adminClassListReducer, { adminSingleClassReducer } from './admin/class';
import singleQuestionReducer from './question/singleQuestion';
import { studentQuizReducer } from './student/quiz';
import teacherClassReducer from './teacher/class';
import teacherSubjectReducer from './teacher/subject';

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
  singleQuestion: singleQuestionReducer,
  studentQuiz: studentQuizReducer,
  teacherClass: teacherClassReducer,
  teacherSubject: teacherSubjectReducer,
});

export default rootReducer;