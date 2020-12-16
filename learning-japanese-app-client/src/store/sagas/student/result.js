import { takeEvery, put } from "redux-saga/effects";
import {
  getResultsStart,
  getResultsSuccess,
  getResultsFailed,
} from "../../actions/student/quiz";
import { STUDENT_GET_RESULTS } from "../../actions/types";
import { getMyQuizResultsRequest } from "../../api/student/index";

function* getResultsWorker() {
  yield put(getResultsStart());
  try {
    const res = yield getMyQuizResultsRequest();
    yield put(getResultsSuccess(res.data.data.results || []));
  } catch (error) {
    yield put(
      getResultsFailed(error.response?.data?.message || "Something went wrong")
    );
  }
}

function* studentResultWatcher() {
  yield takeEvery(STUDENT_GET_RESULTS, getResultsWorker);
}

export default studentResultWatcher;
