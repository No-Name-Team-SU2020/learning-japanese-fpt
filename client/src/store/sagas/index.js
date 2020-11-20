import { all } from 'redux-saga/effects';
import { authUserWatcher } from './auth/auth';
import { alertWatcher } from './ui/ui';
import { getProfileWatcher } from './user/user';
import { getQuestionsWatcher, getSubjectsWatcher, getLessonsWatcher } from './admin';

function* rootSaga() {
  yield all([
    authUserWatcher(),
    alertWatcher(),
    getProfileWatcher(),
    getQuestionsWatcher(),
    getSubjectsWatcher(),
    getLessonsWatcher()
  ])
}

export default rootSaga;