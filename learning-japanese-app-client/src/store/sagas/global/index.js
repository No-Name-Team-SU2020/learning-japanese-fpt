import { takeEvery, put } from "redux-saga/effects";
import {
  getSingleQuestionFailed,
  getSingleQuestionStart,
  getSingleQuestionSuccess
} from "../../actions/global";
import { GLOBAL_GET_SINGLE_QUESTION } from "../../actions/types";
import { getSingleQuestionRequest } from "../../api/global";

function* getSingleQuestionWorker(action) {
  yield put(getSingleQuestionStart());
  try {
    const res = yield getSingleQuestionRequest(action.qId);
    yield put(getSingleQuestionSuccess(res.data.data));
  } catch (error) {
    yield put(
      getSingleQuestionFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* globalQuestionWatcher() {
  yield takeEvery(GLOBAL_GET_SINGLE_QUESTION, getSingleQuestionWorker);
}

export { globalQuestionWatcher };
