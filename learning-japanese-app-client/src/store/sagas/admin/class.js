import { takeEvery, put, takeLeading } from "redux-saga/effects";
import {
  getClassesFailed,
  getClassesSuccess,
  getClassesStart,
  deleteClassFailed,
  deleteClassSuccess,
  deleteClassStart,
  createClassStart,
  createClassSuccess,
  createClassFailed,
  updateClassFailed,
  updateClassSuccess,
  updateClassStart,
  getSingleClassStart,
  getSingleClassSuccess,
  getSingleClassFailed
} from "../../actions/admin/class";
import {
  ADMIN_GET_CLASSES,
  ADMIN_DELETE_CLASS,
  ADMIN_CREATE_CLASS,
  ADMIN_UPDATE_CLASS,
  ADMIN_GET_SINGLE_CLASS,
} from "../../actions/types";
import {
  getClassesRequest,
  deleteClassRequest,
  createClassRequest,
  getSingleClassRequest,
  updateClassRequest
} from "../../api/admin";
import history from '../../../utils/history';

function* getClassesWorker() {
  yield put(getClassesStart());
  try {
    const res = yield getClassesRequest();
    yield put(getClassesSuccess(res.data.data));
  } catch (error) {
    yield put(
      getClassesFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}


function* getSingleClassWorker(action) {
  yield put(getSingleClassStart());
  try {
    const res = yield getSingleClassRequest(action.cId);
    yield put(getSingleClassSuccess(res.data.data));
  } catch (error) {
    yield put(
      getSingleClassFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* deleteClassWorker(action) {
  yield put(deleteClassStart());
  try {
    yield deleteClassRequest(action.cId);
    yield put(deleteClassSuccess(action.cId));
  } catch (error) {
    yield put(
      deleteClassFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* createClassWorker(action) {
  yield put(createClassStart());
  try {
    const res = yield createClassRequest(action.newClass);
    yield put(createClassSuccess(res.data.data));
    history.back();
  } catch (error) {
    yield put(
      createClassFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* updateClassWorker(action) {
  yield put(updateClassStart());
  try {
    yield updateClassRequest(action.cId, action.newClass);
    console.log(action.newClass)
    yield put(updateClassSuccess(action.cId, action.newClass));
    history.push('/manage-class');
  } catch (error) {
    yield put(
      updateClassFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* adminClassWatcher() {
  yield takeEvery(ADMIN_GET_CLASSES, getClassesWorker);
  yield takeLeading(ADMIN_DELETE_CLASS, deleteClassWorker);
  yield takeLeading(ADMIN_CREATE_CLASS, createClassWorker);
  yield takeLeading(ADMIN_UPDATE_CLASS, updateClassWorker);
  yield takeLeading(ADMIN_GET_SINGLE_CLASS, getSingleClassWorker);
}

export { adminClassWatcher };
