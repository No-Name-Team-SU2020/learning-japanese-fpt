import {
  STUDENT_GET_RESULTS_START,
  STUDENT_GET_RESULTS_SUCCESS,
  STUDENT_GET_RESULTS_FAILED,
} from "../../actions/types";

const studentResultIntialState = {
  loading: false,
  error: null,
  data: [],
};

const studentResultReducer = (
  state = studentResultIntialState,
  { type, payload }
) => {
  switch (type) {
    case STUDENT_GET_RESULTS_START:
      return {
        ...state,
        loading: true,
      };
    case STUDENT_GET_RESULTS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: payload,
      };
    case STUDENT_GET_RESULTS_FAILED:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
};

export { studentResultReducer };
