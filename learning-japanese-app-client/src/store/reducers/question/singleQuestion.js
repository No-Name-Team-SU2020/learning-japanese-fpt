import {
  GLOBAL_GET_SINGLE_QUESTION_START,
  GLOBAL_GET_SINGLE_QUESTION_SUCCESS,
  GLOBAL_GET_SINGLE_QUESTION_FAILED,
} from "../../actions/types";

const initialState = {
  questionInfo: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GLOBAL_GET_SINGLE_QUESTION_START:
      return {
        ...state,
        loading: true,
      };
    case GLOBAL_GET_SINGLE_QUESTION_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case GLOBAL_GET_SINGLE_QUESTION_SUCCESS:
      return {
        loading: false,
        questionInfo: payload,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
