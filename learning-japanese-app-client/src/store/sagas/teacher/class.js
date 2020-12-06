import { takeEvery, put } from "redux-saga/effects";
import {
  getClassesByTeacherStart,
  getClassesByTeacherSuccess,
  getClassesByTeacherFailed,
} from "../../actions/teacher/class";
import { TEACHER_GET_MY_CLASSES } from "../../actions/types";
import { getMyClassesRequest } from "../../api/teacher";

function* getClassesWorker() {
  yield put(getClassesByTeacherStart());
  try {
    const res = yield getMyClassesRequest();
    yield put(getClassesByTeacherSuccess(res.data.data));
  } catch (error) {
    yield put(
      getClassesByTeacherFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* teacherClassWatcher() {
  yield takeEvery(TEACHER_GET_MY_CLASSES, getClassesWorker);
}

export { teacherClassWatcher };
