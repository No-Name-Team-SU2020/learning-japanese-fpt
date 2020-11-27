import {
  ADMIN_GET_CLASSES_START,
  ADMIN_GET_CLASSES_SUCCESS,
  ADMIN_GET_CLASSES_FAILED,
  ADMIN_DELETE_CLASS_START,
  ADMIN_DELETE_CLASS_FAILED,
  ADMIN_DELETE_CLASS_SUCCESS,
  ADMIN_CREATE_CLASS_START,
  ADMIN_CREATE_CLASS_SUCCESS,
  ADMIN_CREATE_CLASS_FAILED,
  ADMIN_UPDATE_CLASS_FAILED,
  ADMIN_UPDATE_CLASS_SUCCESS,
  ADMIN_UPDATE_CLASS_START,
  ADMIN_GET_SINGLE_CLASS_START,
  ADMIN_GET_SINGLE_CLASS_SUCCESS,
  ADMIN_GET_SINGLE_CLASS_FAILED
} from "../../actions/types";

const classListInitialState = {
  loading: false,
  error: null,
  classList: [],
};

const reducer = (state = classListInitialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_GET_CLASSES_START:
    case ADMIN_DELETE_CLASS_START:
    case ADMIN_CREATE_CLASS_START:
    case ADMIN_UPDATE_CLASS_START:
      return {
        ...state,
        loading: true,
      };

    case ADMIN_GET_CLASSES_FAILED:
    case ADMIN_DELETE_CLASS_FAILED:
    case ADMIN_CREATE_CLASS_FAILED:
    case ADMIN_UPDATE_CLASS_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case ADMIN_UPDATE_CLASS_SUCCESS:
      return {
        error: null,
        loading: false,
        classList: state.classList.map( c => c.class_id === payload.cId ? payload.newClass : c),
      }
    case ADMIN_GET_CLASSES_SUCCESS:
      return {
        error: null,
        loading: false,
        classList: payload,
      };
    case ADMIN_DELETE_CLASS_SUCCESS:
      return {
        error: null,
        loading: false,
        classList: state.classList.filter((c) => c.class_id !== payload),
      };
    case ADMIN_CREATE_CLASS_SUCCESS:
      return {
        error: null,
        loading: false,
        classList: [payload, ...state.classList],
      };
    default:
      return state;
  }
};

export default reducer;

const singleClassInitialState = {
  error: null,
  loading: false,
  singleClass: null,
}

const adminSingleClassReducer = (state = singleClassInitialState, action) => {
  const { type, payload } = action;
  switch(type) {
    case ADMIN_GET_SINGLE_CLASS_START:
      return {
        ...state,
        loading: true,
      }
      case ADMIN_GET_SINGLE_CLASS_SUCCESS:
        return {
          singleClass: payload,
          loading: false,
          error : null
        }
      case ADMIN_GET_SINGLE_CLASS_FAILED:
        return {
          ...state,
          loading: false,
          error: payload,
        }
    default: return state;
  }
}

export { adminSingleClassReducer };
