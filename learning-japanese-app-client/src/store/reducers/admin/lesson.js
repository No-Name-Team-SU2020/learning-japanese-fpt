import {
  ADMIN_GET_LESSONS_FAILED,
  ADMIN_GET_LESSONS_SUCCESS,
  ADMIN_GET_LESSONS_START,
  ADMIN_GET_SINGLE_LESSON_FAILED,
  ADMIN_GET_SINGLE_LESSON_SUCCESS,
  ADMIN_GET_SINGLE_LESSON_START,
  ADMIN_CREATE_LESSON_START,
  ADMIN_CREATE_LESSON_SUCCESS,
  ADMIN_CREATE_LESSON_FAILED,
  ADMIN_DELETE_LESSON_START,
  ADMIN_DELETE_LESSON_SUCCESS,
  ADMIN_DELETE_LESSON_FAILED,
} from "../../actions/types";

const initialState = {
  lessonList: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_GET_LESSONS_START:
    case ADMIN_CREATE_LESSON_START:
    case ADMIN_DELETE_LESSON_START:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_GET_LESSONS_SUCCESS:
      return {
        loading: false,
        lessonList: payload,
        error: null,
      };
    case ADMIN_GET_LESSONS_FAILED:
    case ADMIN_CREATE_LESSON_FAILED:
    case ADMIN_DELETE_LESSON_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADMIN_CREATE_LESSON_SUCCESS:
      return {
        loading: false,
        lessonList: [payload, ...state.lessonList],
        error: null,
      };
    case ADMIN_DELETE_LESSON_SUCCESS:
      return {
        loading: false,
        lessonList: state.lessonList.filter(l => l.lesson_id !== payload),
        error: null,
      }
    default:
      return state;
  }
};

export default reducer;

const singleLessonReducer = (
  state = { error: null, loading: false, lesson: null },
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_GET_SINGLE_LESSON_START:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_GET_SINGLE_LESSON_SUCCESS:
      return {
        loading: false,
        lesson: payload,
        error: null,
      };
    case ADMIN_GET_SINGLE_LESSON_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export { singleLessonReducer };
