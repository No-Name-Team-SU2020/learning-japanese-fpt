import { put, delay, takeEvery } from 'redux-saga/effects';
import { addAlert, removeAlert } from '../../actions/ui/ui';
import { v4 as uuidv4 } from 'uuid';
import { ALERT } from '../../actions/types';

function* alertWorker(action) {
  const id = yield uuidv4();
  yield put(addAlert({ id, alertType: action.alertType, message: action.message }));
  yield delay(3000);
  yield put(removeAlert(id));
}

function* alertWatcher() {
  yield takeEvery(ALERT, alertWorker);
}

export { alertWatcher };