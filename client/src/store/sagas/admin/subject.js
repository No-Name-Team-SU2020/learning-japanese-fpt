import { takeEvery, put } from 'redux-saga/effects';
import { getSubjectsFailed, getSubjectsStart, getSubjectsSuccess } from '../../actions/admin/subject';
import { ADMIN_GET_SUBJECTS } from '../../actions/types';
import { getSubjectsRequest } from '../../api/admin';

function* getSubjectsWorker(action) {
  yield put(getSubjectsStart());
  try
  {
    const res = yield getSubjectsRequest();
    yield put(getSubjectsSuccess(res.data.data));
  } catch (error)
  {
    yield put(getSubjectsFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* getSubjectsWatcher() {
  yield takeEvery(ADMIN_GET_SUBJECTS, getSubjectsWorker);
}

export { getSubjectsWatcher };