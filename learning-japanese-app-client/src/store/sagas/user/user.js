import { takeEvery, put } from 'redux-saga/effects';
import { getProfileFailed, getProfileStart, getProfileSuccess } from '../../actions/user/user';
import { getProfileRequest } from '../../api/user/user';
import { USER_GET_PROFILE } from '../../actions/types';
import { alert } from '../../actions/ui/ui';

function* getProfileWorker(action) {
  yield put(getProfileStart());
  try
  {
    const res = yield getProfileRequest(action.token);
    yield put(getProfileSuccess(res.data.data));
  } catch (error)
  {
    yield put(alert('info', 'May be login session has expired. Please login again'));
    yield put(getProfileFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* getProfileWatcher() {
  yield takeEvery(USER_GET_PROFILE, getProfileWorker);
}

export { getProfileWatcher };