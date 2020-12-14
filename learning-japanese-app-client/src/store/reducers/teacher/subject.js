import {
  TEACHER_GET_MY_SUBJECTS_START,
  TEACHER_GET_MY_SUBJECTS_SUCCESS,
  TEACHER_GET_MY_SUBJECTS_FAILED,
  TEACHER_GET_SUBJECTS_BY_CLASS_START,
  TEACHER_GET_SUBJECTS_BY_CLASS_SUCCESS,
  TEACHER_GET_SUBJECTS_BY_CLASS_FAILED,
} from "../../actions/types";

const teacherSubjectInitialState = {
  loading: false,
  error: null,
  subjects: {},
};

const reducer = (state = teacherSubjectInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEACHER_GET_MY_SUBJECTS_START:
    case TEACHER_GET_SUBJECTS_BY_CLASS_START:
      return {
        ...state,
        loading: true,
      };
    case TEACHER_GET_MY_SUBJECTS_FAILED:
    case TEACHER_GET_SUBJECTS_BY_CLASS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TEACHER_GET_MY_SUBJECTS_SUCCESS:
    case TEACHER_GET_SUBJECTS_BY_CLASS_SUCCESS:
      return {
        error: null,
        loading: false,
        subjects: payload ? payload : {},
      };
    default:
      return state;
  }
};

export default reducer;
