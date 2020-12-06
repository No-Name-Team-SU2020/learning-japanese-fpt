import { all } from 'redux-saga/effects';
import { authUserWatcher } from './auth/auth';
import { alertWatcher } from './ui/ui';
import { getProfileWatcher } from './user/user';
import { adminQuestionsWatcher, adminSubjectsWatcher, adminlessonsWatcher, adminClassWatcher } from './admin';
import { globalQuestionWatcher } from './global';
import studentQuizWatcher from './student/quiz';
import { teacherClassWatcher } from './teacher/class';

function* rootSaga() {
  yield all([
    authUserWatcher(),
    alertWatcher(),
    getProfileWatcher(),
    adminQuestionsWatcher(),
    adminSubjectsWatcher(),
    adminlessonsWatcher(), 
    adminClassWatcher(),
    globalQuestionWatcher(),
    studentQuizWatcher(),
    teacherClassWatcher(),
  ])
}

export default rootSaga;