import { takeLeading, put } from "redux-saga/effects";
import {
  submitAnswersStart,
  submitAnswersSuccess,
  submitAnswersFailed,
} from "../../actions/student/quiz";
import { STUDENT_SUBMIT_ANSWERS } from "../../actions/types";
import { createAnswersRequest } from "../../api/student/index";

function* submitAnswersWorker(action) {
  yield put(submitAnswersStart());
  try {
    const res = yield createAnswersRequest(action.lId, action.listAnswers);
    yield put(submitAnswersSuccess(res.data.data));
  } catch (error) {
    yield put(
      submitAnswersFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* studentQuizWatcher() {
  yield takeLeading(STUDENT_SUBMIT_ANSWERS, submitAnswersWorker);
}

export default studentQuizWatcher;
