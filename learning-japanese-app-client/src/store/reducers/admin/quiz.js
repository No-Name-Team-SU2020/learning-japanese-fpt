import {
  ADMIN_GET_ALL_QUIZ_PRESET_START,
  ADMIN_GET_ALL_QUIZ_PRESET_SUCCESS,
  ADMIN_GET_ALL_QUIZ_PRESET_FAILED,
  ADMIN_CREATE_QUIZ_PRESET_START,
  ADMIN_CREATE_QUIZ_PRESET_SUCCESS,
  ADMIN_CREATE_QUIZ_PRESET_FAILED,
  ADMIN_DELETE_QUIZ_PRESET_START,
  ADMIN_DELETE_QUIZ_PRESET_SUCCESS,
  ADMIN_DELETE_QUIZ_PRESET_FAILED,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS_START,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS_SUCCESS,
  ADMIN_UPDATE_QUIZ_PRESET_STATUS_FAILED,
} from "../../actions/types";

const reducer = (
  state = {
    loading: false,
    error: null,
    data: [],
  },
  { type, payload }
) => {
  switch (type) {
    case ADMIN_GET_ALL_QUIZ_PRESET_START:
    case ADMIN_CREATE_QUIZ_PRESET_START:
    case ADMIN_DELETE_QUIZ_PRESET_START:
    case ADMIN_UPDATE_QUIZ_PRESET_STATUS_START:
      return {
        ...state,
        loading: true,
      };
    case ADMIN_GET_ALL_QUIZ_PRESET_SUCCESS:
      return {
        loading: false,
        error: null,
        data: payload,
      };
    case ADMIN_GET_ALL_QUIZ_PRESET_FAILED:
    case ADMIN_CREATE_QUIZ_PRESET_FAILED:
    case ADMIN_DELETE_QUIZ_PRESET_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADMIN_CREATE_QUIZ_PRESET_SUCCESS:
      return {
        loading: false,
        error: null,
        data: [...state.data, payload],
      };
    case ADMIN_DELETE_QUIZ_PRESET_SUCCESS:
    case ADMIN_UPDATE_QUIZ_PRESET_STATUS_FAILED:
      return {
        loading: false,
        error: null,
        data: state.data.filter((qs) => qs.preset_id !== payload),
      };
    case ADMIN_UPDATE_QUIZ_PRESET_STATUS_SUCCESS:
      return {
        loading: false,
        error: null,
        data: state.data.map((qs) =>
          qs.preset_id === payload.presetId
            ? {
                ...qs,
                is_chosen: !qs.is_chosen,
              }
            : qs
        ),
      };
    default:
      return state;
  }
};

export default reducer;
