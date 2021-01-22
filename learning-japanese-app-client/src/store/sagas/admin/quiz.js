import {
  ADMIN_GET_ALL_QUIZ_PRESET,
  ADMIN_CREATE_QUIZ_PRESET,
  ADMIN_DELETE_QUIZ_PRESET,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS,
} from "../../actions/types";
import {
  getAllQuizPresetStart,
  getAllQuizPresetSuccess,
  getAllQuizPresetFailed,
  createQuizPresetStart,
  createQuizPresetSuccess,
  createQuizPresetFailed,
  deleteQuizPresetStart,
  deleteQuizPresetSuccess,
  deleteQuizPresetFailed,
  updateQuizPresetStatusStart,
  updateQuizPresetStatusSuccess,
  updateQuizPresetStatusFailed,
} from "../../actions/admin";
import {
  getAllQuizPresetRequest,
  createQuizPresetRequest,
  deleteQuizPresetRequest,
  updateQuizPresetStatusRequest,
} from "../../api/admin";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import { alert } from "../../actions/ui/ui";

function* getAllQuizPresetWorker() {
  yield put(getAllQuizPresetStart());
  try {
    const res = yield getAllQuizPresetRequest();
    yield put(getAllQuizPresetSuccess(res.data.data || []));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      getAllQuizPresetFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* createQuizPresetWorker(action) {
  yield put(createQuizPresetStart());
  try {
    const res = yield createQuizPresetRequest(action.newSetting);
    yield put(createQuizPresetSuccess(res.data.data || {}));
    yield put(alert("success", "Created new quiz preset success!!!"));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      createQuizPresetFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* deleteQuizPresetWorker(action) {
  yield put(deleteQuizPresetStart());
  try {
    yield deleteQuizPresetRequest(action.id);
    yield put(deleteQuizPresetSuccess(action.id));
    yield put(alert("success", "Deleted quiz preset success!!!"));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      deleteQuizPresetFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* updateQuizPresetStatusWorker(action) {
  yield put(updateQuizPresetStatusStart());
  try {
    yield updateQuizPresetStatusRequest(action.is_chosen, action.id);
    yield put(updateQuizPresetStatusSuccess(action.id));
    yield put(alert("success", "Update quiz preset status success!!!"));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      updateQuizPresetStatusFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* quizPresetWatcher() {
  yield takeEvery(ADMIN_GET_ALL_QUIZ_PRESET, getAllQuizPresetWorker);
  yield takeLatest(ADMIN_CREATE_QUIZ_PRESET, createQuizPresetWorker);
  yield takeLatest(ADMIN_DELETE_QUIZ_PRESET, deleteQuizPresetWorker);
  yield takeLatest(
    ADMIN_UPDATE_QUIZ_PRESET_STATUS,
    updateQuizPresetStatusWorker
  );
}

export { quizPresetWatcher };
