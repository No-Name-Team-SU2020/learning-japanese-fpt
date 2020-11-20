import { takeEvery, put } from 'redux-saga/effects';
import { getLessonsStart, getLessonsSuccess, getLessonsFailed } from '../../actions/admin';
import { ADMIN_GET_LESSONS } from '../../actions/types';
import { getLessonsRequest } from '../../api/admin';

function* getLessonsWorker(action) {
  yield put(getLessonsStart());
  try
  {
    const res = yield getLessonsRequest(action.subjectId);
    yield put(getLessonsSuccess(res.data.data));
  } catch (error)
  {
    yield put(getLessonsFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* getLessonsWatcher() {
  yield takeEvery(ADMIN_GET_LESSONS, getLessonsWorker);
}

export { getLessonsWatcher };