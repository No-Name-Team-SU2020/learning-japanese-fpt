import { takeEvery, put, takeLatest } from 'redux-saga/effects';
import { getQuestionsFailed, getQuestionsStart, getQuestionsSuccess,
  createQuestionStart, createQuestionSuccess,createQuestionFailed
} from '../../actions/admin/question';
import { ADMIN_GET_QUESTIONS, ADMIN_CREATE_QUESTION } from '../../actions/types';
import { getQuestionsRequest, createQuestionRequest } from '../../api/admin';
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

function* createQuestionWorker(action) {
  yield put(createQuestionStart());
  try
  {
    const res = yield createQuestionRequest(action.question);
    yield put(createQuestionSuccess(res.data.data));
    history.push('/');
  } catch (error)
  {
    yield put(createQuestionFailed(error.response?.data?.message || 'Something went wrong'));
  }
}

function* getQuestionsWatcher() {
  yield takeEvery(ADMIN_GET_QUESTIONS, getQuestionsWorker);
  yield takeLatest(ADMIN_CREATE_QUESTION, createQuestionWorker);
}

export { getQuestionsWatcher };