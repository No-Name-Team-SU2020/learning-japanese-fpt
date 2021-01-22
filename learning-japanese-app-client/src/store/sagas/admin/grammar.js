import {
  GLOBAL_GET_LIST_GRAMMAR,
  GLOBAL_GET_SINGLE_GRAMMAR,
  ADMIN_CREATE_GRAMMAR,
  ADMIN_UPDATE_GRAMMAR,
  ADMIN_DELETE_GRAMMAR,
} from "../../actions/types";
import {
  getListGrammarStart,
  getListGrammarSuccess,
  getListGrammarFailed,
  getSingleGrammarStart,
  getSingleGrammarSuccess,
  getSingleGrammarFailed,
  createGrammarStart,
  createGrammarSuccess,
  createGrammarFailed,
  updateGrammarStart,
  updateGrammarSuccess,
  updateGrammarFailed,
  deleteGrammarStart,
  deleteGrammarSuccess,
  deleteGrammarFailed,
} from "../../actions/admin";
import {
  getListGrammarRequest,
  getSingleGrammarRequest,
  createGrammarRequest,
  updateGrammarRequest,
  deleteGrammarRequest,
} from "../../api/admin";
import { takeEvery, put, takeLatest } from "redux-saga/effects";
import { alert } from "../../actions/ui/ui";
import history from "../../../utils/history";

function* getGrammarListWorker(action) {
  yield put(getListGrammarStart());
  try {
    const res = yield getListGrammarRequest(action.lessonId);
    yield put(getListGrammarSuccess(res.data.data || {}));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      getListGrammarFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* getSingleGrammarWorker(action) {
  yield put(getSingleGrammarStart());
  try {
    const res = yield getSingleGrammarRequest(action.grammarId);
    yield put(getSingleGrammarSuccess(res.data.data || {}));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      getSingleGrammarFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* createGrammarWorker(action) {
  yield put(createGrammarStart());
  try {
    const res = yield createGrammarRequest(action.lessonId, action.grammar);
    yield put(createGrammarSuccess(res.data.data || undefined));
    yield put(alert("success", "Create grammar success"));
    history.back();
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      createGrammarFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* updateGrammarWorker(action) {
  yield put(updateGrammarStart());
  try {
    yield updateGrammarRequest(action.grammarId, action.grammar);
    yield put(updateGrammarSuccess(action.grammarId, action.grammar));
    yield put(alert("success", "Update grammar success"));
    history.back();
  } catch (error) {
    console.log(error);
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      updateGrammarFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* deleteGrammarWorker(action) {
  yield put(deleteGrammarStart());
  try {
    yield deleteGrammarRequest(action.grammarId);
    yield put(deleteGrammarSuccess(action.grammarId));
    yield put(alert("success", "Delete grammar success"));
  } catch (error) {
    yield put(
      alert("error", error.response?.data?.message || "Something went wrong")
    );
    yield put(
      deleteGrammarFailed(
        error.response?.data?.message || "Something went wrong"
      )
    );
  }
}

function* grammarWatcher() {
  yield takeEvery(GLOBAL_GET_LIST_GRAMMAR, getGrammarListWorker);
  yield takeEvery(GLOBAL_GET_SINGLE_GRAMMAR, getSingleGrammarWorker);
  yield takeLatest(ADMIN_CREATE_GRAMMAR, createGrammarWorker);
  yield takeLatest(ADMIN_UPDATE_GRAMMAR, updateGrammarWorker);
  yield takeLatest(ADMIN_DELETE_GRAMMAR, deleteGrammarWorker);
}

export { grammarWatcher };
