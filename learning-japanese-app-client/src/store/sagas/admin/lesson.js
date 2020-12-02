import { takeEvery, put, takeLeading } from "redux-saga/effects";
import {
  getLessonsStart,
  getLessonsSuccess,
  getLessonsFailed,
  getSingleLessonFailed,
  getSingleLessonStart,
  getSingleLessonSuccess,
  createLessonStart,
  createLessonFailed,
  createLessonSuccess,
  deleteLessonStart,
  deleteLessonFailed,
  deleteLessonSuccess,
  updateLessonStart,
  updateLessonSuccess,
  updateLessonFailed,
} from "../../actions/admin";
import {
  ADMIN_GET_LESSONS,
  ADMIN_GET_SINGLE_LESSON,
  ADMIN_CREATE_LESSON,
  ADMIN_DELETE_LESSON,
  ADMIN_UPDATE_LESSON,
} from "../../actions/types";
import {
  getLessonsRequest,
  getSingleLessonRequest,
  createLessonRequest,
  deleteLessonRequest,
  updateLessonRequest,
} from "../../api/admin";
import history from "../../../utils/history";

function* getLessonsWorker(action) {
  yield put(getLessonsStart());
  try {
    const res = yield getLessonsRequest(action.subjectId);
    yield put(getLessonsSuccess(res.data.data));
  } catch (error) {
    yield put(
      getLessonsFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* getSingleLessonWorker(action) {
  yield put(getSingleLessonStart());
  try {
    const res = yield getSingleLessonRequest(action.lessonId);
    yield put(getSingleLessonSuccess(res.data.data));
  } catch (error) {
    yield put(
      getSingleLessonFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* createLessonWorker(action) {
  yield put(createLessonStart());
  try {
    const res = yield createLessonRequest(action.sId, action.lesson);
    yield put(createLessonSuccess(res.data.data));
    history.back();
  } catch (error) {
    yield put(
      createLessonFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* updateLessonWorker(action) {
  yield put(updateLessonStart());
  try {
    yield updateLessonRequest(action.lId, action.lesson);
    yield put(updateLessonSuccess(action.lId, action.lesson));
    history.back();
  } catch (error) {
    yield put(
      updateLessonFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* deleteLessonWorker(action) {
  yield put(deleteLessonStart());
  try {
    yield deleteLessonRequest(action.lId);
    yield put(deleteLessonSuccess(action.lId));
  } catch (error) {
    yield put(
      deleteLessonFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* adminlessonsWatcher() {
  yield takeEvery(ADMIN_GET_LESSONS, getLessonsWorker);
  yield takeEvery(ADMIN_GET_SINGLE_LESSON, getSingleLessonWorker);
  yield takeLeading(ADMIN_CREATE_LESSON, createLessonWorker);
  yield takeLeading(ADMIN_DELETE_LESSON, deleteLessonWorker);
  yield takeLeading(ADMIN_UPDATE_LESSON, updateLessonWorker);
}

export { adminlessonsWatcher };
