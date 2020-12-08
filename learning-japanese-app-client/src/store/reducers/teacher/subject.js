import {
  TEACHER_GET_MY_SUBJECTS_START,
  TEACHER_GET_MY_SUBJECTS_SUCCESS,
  TEACHER_GET_MY_SUBJECTS_FAILED,
} from "../../actions/types";

const teacherSubjectInitialState = {
  loading: false,
  error: null,
  subjects: [],
};

const reducer = (state = teacherSubjectInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case TEACHER_GET_MY_SUBJECTS_START:
      return {
        ...state,
        loading: true,
      };
    case TEACHER_GET_MY_SUBJECTS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case TEACHER_GET_MY_SUBJECTS_SUCCESS:
      return {
        error: null,
        loading: false,
        subjects: payload,
      };
    default:
      return state;
  }
};

export default reducer;
