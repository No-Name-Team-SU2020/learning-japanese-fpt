import {
  ADMIN_GET_SUBJECTS_FAILED, ADMIN_GET_SUBJECTS_SUCCESS, ADMIN_GET_SUBJECTS_START
} from '../../actions/types';

const initialState = {
  subjectList: [],
  loading: false,
  error: null
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case ADMIN_GET_SUBJECTS_START:
      return {
        ...state,
        loading: true
      }
    case ADMIN_GET_SUBJECTS_SUCCESS:
      return {
        loading: false,
        subjectList: payload,
        error: null
      }
    case ADMIN_GET_SUBJECTS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    default: return state;
  }
}

export default reducer;