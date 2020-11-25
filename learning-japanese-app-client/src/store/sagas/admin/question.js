import { takeEvery, put, takeLeading, takeLatest } from 'redux-saga/effects';
import { getQuestionsFailed, getQuestionsStart, getQuestionsSuccess,
  createQuestionStart, createQuestionSuccess,createQuestionFailed,
  deleteQuestionFailed, deleteQuestionStart, deleteQuestionSuccess,
  updateQuestionFailed, updateQuestionStart, updateQuestionSuccess,
  findQuestionFailed, findQuestionStart, findQuestionSuccess
} from '../../actions/admin/question';
import {
  ADMIN_GET_QUESTIONS, ADMIN_CREATE_QUESTION, ADMIN_DELETE_QUESTION, ADMIN_UPDATE_QUESTION, 
  GLOBAL_FIND_QUESTION
  } from '../../actions/types';
import {
  getQuestionsRequest, createQuestionRequest, deleteQuestionRequest, updateQuestionRequest,
  searchQuestionRequest
  } from '../../api/admin';
import { alert } from '../../actions/ui/ui';
import history from '../../../utils/history';

function* getQuestionsWorker(action) {
  yield put(getQuestionsStart());
  try
  {
    const res = yield getQuestionsRequest(action.lessonId);
    yield put(getQuestionsSuccess(res.data.data));
  } catch (error)
  {
    yield put(getQuestionsFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* findQuestionWorker(action) {
  yield put(findQuestionStart());
  try
  {
    const res = yield searchQuestionRequest(action.term);
    yield put(findQuestionSuccess(res.data.data));
  } catch (error)
  {
    yield put(findQuestionFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* createQuestionWorker(action) {
  yield put(createQuestionStart());
  try
  {
    const res = yield createQuestionRequest(action.question);
    yield put(alert('success', 'Create Question Successfully'));
    yield put(createQuestionSuccess(res.data.data));
    history.back();
  } catch (error)
  {
    yield put(createQuestionFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* deleteQuestionWorker(action) {
  yield put(deleteQuestionStart());
  try
  {
    yield deleteQuestionRequest(action.qId);
    yield put(alert('success', 'Delete Question Successfully'));
    yield put(deleteQuestionSuccess(action.qId));
  } catch (error)
  {
    yield put(deleteQuestionFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* updateQuestionWorker(action) {
  yield put(updateQuestionStart());
  try
  {
    const res = yield updateQuestionRequest(action.qId, action.updatedQuestion);
    yield put(alert('success', 'Updated Question Successfully'));
    yield put(updateQuestionSuccess(action.qId, res.data.data));
    history.back();
  } catch (error)
  {
    yield put(updateQuestionFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* adminQuestionsWatcher() {
  yield takeEvery(ADMIN_GET_QUESTIONS, getQuestionsWorker);
  yield takeLeading(ADMIN_CREATE_QUESTION, createQuestionWorker);
  yield takeLeading(ADMIN_DELETE_QUESTION, deleteQuestionWorker);
  yield takeLeading(ADMIN_UPDATE_QUESTION, updateQuestionWorker);
  yield takeLatest(GLOBAL_FIND_QUESTION, findQuestionWorker);
}

export { adminQuestionsWatcher };