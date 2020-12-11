import { takeEvery, put } from "redux-saga/effects";
import {
  getClassesByTeacherStart,
  getClassesByTeacherSuccess,
  getClassesByTeacherFailed,
  getClassesBySubjectStart,
  getClassesBySubjectSuccess,
  getClassesBySubjectFailed,
} from "../../actions/teacher/class";
import {
  TEACHER_GET_MY_CLASSES,
  TEACHER_GET_CLASSES_BY_SUBJECT,
} from "../../actions/types";
import {
  getMyClassesRequest,
  getClassesBySubjectRequest,
} from "../../api/teacher";

function* getClassesWorker() {
  yield put(getClassesByTeacherStart());
  try {
    const res = yield getMyClassesRequest();
    yield put(getClassesByTeacherSuccess(res.data.data));
  } catch (error) {
    yield put(
      getClassesByTeacherFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* getClassesBySubjectWorker(action) {
  yield put(getClassesBySubjectStart());
  try {
    const res = yield getClassesBySubjectRequest(action.sId);
    yield put(getClassesBySubjectSuccess(res.data.data));
  } catch (error) {
    yield put(
      getClassesBySubjectFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* teacherClassWatcher() {
  yield takeEvery(TEACHER_GET_MY_CLASSES, getClassesWorker);
  yield takeEvery(TEACHER_GET_CLASSES_BY_SUBJECT, getClassesBySubjectWorker);
}

export { teacherClassWatcher };
