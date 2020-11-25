import { takeEvery, put } from 'redux-saga/effects';
import { getLessonsStart, getLessonsSuccess, getLessonsFailed,
  getSingleLessonFailed, getSingleLessonStart, getSingleLessonSuccess
} from '../../actions/admin';
import { ADMIN_GET_LESSONS, ADMIN_GET_SINGLE_LESSON } from '../../actions/types';
import { getLessonsRequest, getSingleLessonRequest } from '../../api/admin';

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

function* getSingleLessonWorker(action) {
  yield put(getSingleLessonStart());
  try
  {
    const res = yield getSingleLessonRequest(action.lessonId);
    yield put(getSingleLessonSuccess(res.data.data));
  } catch (error)
  {
    yield put(getSingleLessonFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* adminlessonsWatcher() {
  yield takeEvery(ADMIN_GET_LESSONS, getLessonsWorker);
  yield takeEvery(ADMIN_GET_SINGLE_LESSON, getSingleLessonWorker);
}

export { adminlessonsWatcher };