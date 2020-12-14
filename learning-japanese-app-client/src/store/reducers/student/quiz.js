import {
  STUDENT_SUBMIT_ANSWERS_START,
  STUDENT_SUBMIT_ANSWERS_SUCCESS,
  STUDENT_SUBMIT_ANSWERS_FAILED,
} from "../../actions/types";

const studentQuizIntialState = {
  loading: false,
  error: null,
  response: null,
};

const studentQuizReducer = (
  state = studentQuizIntialState,
  { type, payload }
) => {
  switch (type) {
    case STUDENT_SUBMIT_ANSWERS_START:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_SUBMIT_ANSWERS_SUCCESS:
      return {
        loading: false,
        error: null,
        response: payload,
      };
    case STUDENT_SUBMIT_ANSWERS_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { studentQuizReducer };
