import { takeEvery, put } from "redux-saga/effects";
import {
  getMySubjectsStart,
  getMySubjectsSuccess,
  getMySubjectsFailed,
} from "../../actions/teacher/subject";
import { TEACHER_GET_MY_SUBJECTS } from "../../actions/types";
import { getMySubjectsRequest } from "../../api/teacher";

function* getMySubjectsWorker() {
  yield put(getMySubjectsStart());
  try {
    const res = yield getMySubjectsRequest();
    yield put(getMySubjectsSuccess(res.data.data.subjects));
  } catch (error) {
    yield put(
      getMySubjectsFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* teacherSubjectWatcher() {
  yield takeEvery(TEACHER_GET_MY_SUBJECTS, getMySubjectsWorker);
}

export { teacherSubjectWatcher };
