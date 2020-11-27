import { all } from 'redux-saga/effects';
import { authUserWatcher } from './auth/auth';
import { alertWatcher } from './ui/ui';
import { getProfileWatcher } from './user/user';
import { adminQuestionsWatcher, adminSubjectsWatcher, adminlessonsWatcher, adminClassWatcher } from './admin';
import { globalQuestionWatcher } from './global';

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
  ])
}

export default rootSaga;