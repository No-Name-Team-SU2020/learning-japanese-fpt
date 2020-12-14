import { takeEvery, put } from "redux-saga/effects";
import {
  getMySubjectsStart,
  getMySubjectsSuccess,
  getMySubjectsFailed,
  getSubjectsByClassStart,
  getSubjectsByClassSuccess,
  getSubjectsByClassFailed,
} from "../../actions/teacher/subject";
import {
  TEACHER_GET_MY_SUBJECTS,
  TEACHER_GET_SUBJECTS_BY_CLASS,
} from "../../actions/types";
import {
  getMySubjectsRequest,
  getSubjectsByClassRequest,
} from "../../api/teacher";

function* getMySubjectsWorker() {
  yield put(getMySubjectsStart());
  try {
    const res = yield getMySubjectsRequest();
    yield put(getMySubjectsSuccess(res.data.data?.subjects));
  } catch (error) {
    yield put(
      getMySubjectsFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* getSubjectsByClassWorker(action) {
  yield put(getSubjectsByClassStart());
  try {
    const res = yield getSubjectsByClassRequest(action.cId);
    yield put(getSubjectsByClassSuccess(res.data.data[0]));
  } catch (error) {
    yield put(
      getSubjectsByClassFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* teacherSubjectWatcher() {
  yield takeEvery(TEACHER_GET_MY_SUBJECTS, getMySubjectsWorker);
  yield takeEvery(TEACHER_GET_SUBJECTS_BY_CLASS, getSubjectsByClassWorker);
}

export { teacherSubjectWatcher };
