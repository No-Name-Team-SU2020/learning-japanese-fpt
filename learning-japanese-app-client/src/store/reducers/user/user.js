import {
  USER_GET_PROFILE_START,
  USER_GET_PROFILE_SUCCESS,
  USER_GET_PROFILE_FAILED,
  USER_CLEAR_PROFILE,
} from "../../actions/types";

const initialState = {
  profile: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_GET_PROFILE_START:
      return {
        ...state,
        loading: true,
      };
    case USER_GET_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: payload,
        error: null,
      };
    case USER_GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case USER_CLEAR_PROFILE:
      return {
        profile: null,
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
