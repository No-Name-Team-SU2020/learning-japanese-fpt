import {
  ADMIN_GET_LESSONS_FAILED, ADMIN_GET_LESSONS_SUCCESS, ADMIN_GET_LESSONS_START,
  ADMIN_GET_SINGLE_LESSON_FAILED, ADMIN_GET_SINGLE_LESSON_SUCCESS, ADMIN_GET_SINGLE_LESSON_START
} from '../../actions/types';

const initialState = {
  lessonList: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case ADMIN_GET_LESSONS_START:
      return {
        ...state,
        loading: true
      }
    case ADMIN_GET_LESSONS_SUCCESS:
      return {
        loading: false,
        lessonList: payload,
        error: null
      }
    case ADMIN_GET_LESSONS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default: return state;
  }
}

export default reducer;

const singleLessonReducer = (state = { error: null, loading: false, lesson : null }, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case ADMIN_GET_SINGLE_LESSON_START:
      return {
        ...state,
        loading: true
      }
    case ADMIN_GET_SINGLE_LESSON_SUCCESS:
      return {
        loading: false,
        lesson: payload,
        error: null
      }
    case ADMIN_GET_SINGLE_LESSON_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default: return state;
  }
}

export  { singleLessonReducer };
