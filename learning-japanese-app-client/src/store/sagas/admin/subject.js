import { takeEvery, put, takeLeading } from "redux-saga/effects";
import {
  getSubjectsFailed,
  getSubjectsStart,
  getSubjectsSuccess,
  createSubjectStart,
  createSubjectFailed,
  createSubjectSuccess,
  deleteSubjectStart,
  deleteSubjectSuccess,
  deleteSubjectFailed,
  updateSubjectFailed,
  updateSubjectStart,
  updateSubjectSuccess,
} from "../../actions/admin/subject";
import {
  ADMIN_GET_SUBJECTS,
  ADMIN_CREATE_SUBJECT,
  ADMIN_DELETE_SUBJECT,
  ADMIN_UPDATE_SUBJECT,
} from "../../actions/types";
import {
  getSubjectsRequest,
  createSubjectRequest,
  deleteSubjectRequest,
  updateSubjectRequest,
} from "../../api/admin";
import { alert } from "../../actions/ui/ui";

function* getSubjectsWorker() {
  yield put(getSubjectsStart());
  try {
    const res = yield getSubjectsRequest();
    yield put(getSubjectsSuccess(res.data.data));
  } catch (error) {
    yield put(
      getSubjectsFailed(error.response?.data?.message || "Something went wrong")
    );
    yield put(alert("error", "Getting Subject List Failed"));
  }
}

function* createSubjectWorker(action) {
  yield put(createSubjectStart());
  try {
    const res = yield createSubjectRequest(action.subject);
    yield put(createSubjectSuccess(res.data.data));
    yield put(alert("success", "Create Subject Success"));
    window.location.href = "/manage-subject";
  } catch (error) {
    yield put(
      createSubjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* deleteSubjectWorker(action) {
  console.log(action);
  yield put(deleteSubjectStart());
  try {
    yield deleteSubjectRequest(action.sId);
    yield put(deleteSubjectSuccess(action.sId));
    yield put(alert("success", "Delete Subject Success"));
  } catch (error) {
    yield put(
      deleteSubjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* updateSubjectWorker(action) {
  yield put(updateSubjectStart());
  try {
    const res = yield updateSubjectRequest(action.sId, action.subject);
    if (res.data.data[0] === 1) {
      yield put(updateSubjectSuccess(action.sId, action.subject));
      yield put(alert("success", "Update Subject Success"));
      window.location.href = "/manage-subject";
    } else {
      yield put(updateSubjectFailed("Can not update subject"));
    }
  } catch (error) {
    yield put(
      updateSubjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* adminSubjectsWatcher() {
  yield takeEvery(ADMIN_GET_SUBJECTS, getSubjectsWorker);
  yield takeLeading(ADMIN_CREATE_SUBJECT, createSubjectWorker);
  yield takeLeading(ADMIN_DELETE_SUBJECT, deleteSubjectWorker);
  yield takeLeading(ADMIN_UPDATE_SUBJECT, updateSubjectWorker);
}

export { adminSubjectsWatcher };
