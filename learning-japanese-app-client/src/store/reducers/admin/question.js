import {
  ADMIN_GET_QUESTIONS_FAILED, ADMIN_GET_QUESTIONS_SUCCESS, ADMIN_GET_QUESTIONS_START,
  ADMIN_CREATE_QUESTION_START, ADMIN_CREATE_QUESTION_SUCCESS, ADMIN_CREATE_QUESTION_FAILED,
  ADMIN_DELETE_QUESTION_FAILED, ADMIN_DELETE_QUESTION_START, ADMIN_DELETE_QUESTION_SUCCESS,
  ADMIN_UPDATE_QUESTION_FAILED, ADMIN_UPDATE_QUESTION_START, ADMIN_UPDATE_QUESTION_SUCCESS
} from '../../actions/types';

const initialState = {
  questionList: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case ADMIN_GET_QUESTIONS_START:
    case ADMIN_CREATE_QUESTION_START:
    case ADMIN_DELETE_QUESTION_START:
    case ADMIN_UPDATE_QUESTION_START:
      return {
        ...state,
        loading: true
      }
    case ADMIN_GET_QUESTIONS_SUCCESS:
      return {
        loading: false,
        questionList: payload,
        error: null
      }
    case ADMIN_GET_QUESTIONS_FAILED:
    case ADMIN_CREATE_QUESTION_FAILED:
    case ADMIN_DELETE_QUESTION_FAILED:
    case ADMIN_UPDATE_QUESTION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case ADMIN_CREATE_QUESTION_SUCCESS:
      return {
        loading: false,
        questionList: [...state.questionList, payload],
        error: null
      }
    case ADMIN_DELETE_QUESTION_SUCCESS:
      console.log(payload, typeof payload);
      return {
        loading: false,
        questionList: state.questionList.filter(q => q.question_id !== payload),
        error: null
      }
    case ADMIN_UPDATE_QUESTION_SUCCESS:
      return {
        loading: false,
        questionList: state.questionList.map(q => q.question_id === payload.qId ? payload.updatedQuestion : q ),
        error: null
      }
    default: return state;
  }
}

export default reducer;