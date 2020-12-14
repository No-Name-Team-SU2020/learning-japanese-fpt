import {
  TEACHER_GET_MY_CLASSES_START,
  TEACHER_GET_MY_CLASSES_SUCCESS,
  TEACHER_GET_MY_CLASSES_FAILED,
  TEACHER_GET_CLASSES_BY_SUBJECT_START,
  TEACHER_GET_CLASSES_BY_SUBJECT_SUCCESS,
  TEACHER_GET_CLASSES_BY_SUBJECT_FAILED,
} from "../../actions/types";

const teacherClassInitialState = {
  loading: false,
  error: null,
  classes: {},
};

const reducer = (state = teacherClassInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEACHER_GET_MY_CLASSES_START:
    case TEACHER_GET_CLASSES_BY_SUBJECT_START:
      return {
        ...state,
        loading: true,
      };
    case TEACHER_GET_MY_CLASSES_FAILED:
    case TEACHER_GET_CLASSES_BY_SUBJECT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TEACHER_GET_MY_CLASSES_SUCCESS:
    case TEACHER_GET_CLASSES_BY_SUBJECT_SUCCESS:
      return {
        error: null,
        loading: false,
        classes: payload,
      };
    default:
      return state;
  }
};

export default reducer;
