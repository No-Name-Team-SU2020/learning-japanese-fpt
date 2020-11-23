import {
  ADMIN_GET_SUBJECTS_FAILED, ADMIN_GET_SUBJECTS_SUCCESS, ADMIN_GET_SUBJECTS_START,
  ADMIN_CREATE_SUBJECT_FAILED, ADMIN_CREATE_SUBJECT_START, ADMIN_CREATE_SUBJECT_SUCCESS,
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
    case ADMIN_CREATE_SUBJECT_START:
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
    case ADMIN_CREATE_SUBJECT_FAILED:
      return {
        ...state,
        loading: false,
        error: payload
      }
    case ADMIN_CREATE_SUBJECT_SUCCESS:
      return {
        loading: false,
        subjectList: [payload, ...state.subjectList],
        error: null
      }
    default: return state;
  }
}

export default reducer;