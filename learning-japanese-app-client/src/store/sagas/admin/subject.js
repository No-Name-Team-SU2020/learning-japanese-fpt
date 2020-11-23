import { takeEvery, put } from 'redux-saga/effects';
import { getSubjectsFailed, getSubjectsStart, getSubjectsSuccess,
  createSubjectStart, createSubjectFailed, createSubjectSuccess
} from '../../actions/admin/subject';
import { ADMIN_GET_SUBJECTS, ADMIN_CREATE_SUBJECT } from '../../actions/types';
import { getSubjectsRequest, createSubjectRequest } from '../../api/admin';

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

function* createSubjectWorker(action) {
  yield put(createSubjectStart());
  try
  {
    const res = yield createSubjectRequest(action.subject);
    yield put(createSubjectSuccess(res.data.data));
  } catch (error)
  {
    yield put(createSubjectFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* adminSubjectsWatcher() {
  yield takeEvery(ADMIN_GET_SUBJECTS, getSubjectsWorker);
  yield takeEvery(ADMIN_CREATE_SUBJECT, createSubjectWorker);
}

export { adminSubjectsWatcher };