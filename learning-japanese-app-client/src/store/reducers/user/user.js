import * as actionTypes from '../../actions/types';

const initialState = {
  profile: null,
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.USER_GET_PROFILE_START:
      return {
        ...state,
        loading: true
      }
    case actionTypes.USER_GET_PROFILE_SUCCESS:
      return {
        loading: false,
        profile: payload,
        error: null
      }
    case actionTypes.USER_GET_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default: return state;
  }
}

export default reducer;