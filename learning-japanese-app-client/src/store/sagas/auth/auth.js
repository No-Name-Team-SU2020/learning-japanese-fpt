import { takeLatest, put } from 'redux-saga/effects';
import { authUserStart, authUserSuccess, authUserFailed } from '../../actions/auth/auth';
import { authUserRequest } from '../../api/auth/auth';
import { AUTH_USER } from '../../actions/types';
import { alert } from '../../actions/ui/ui';

function* authUserWorker(action) {
  yield put(authUserStart());
  try
  {
    const res = yield authUserRequest(action.credentials);
    yield put(authUserSuccess(res.data.data));
    yield put(alert('success', 'Login Successfully'));
    window.location.href = "/";
  } catch (error)
  {
    yield put(authUserFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* authUserWatcher() {
  yield takeLatest(AUTH_USER, authUserWorker);
}

export { authUserWatcher };