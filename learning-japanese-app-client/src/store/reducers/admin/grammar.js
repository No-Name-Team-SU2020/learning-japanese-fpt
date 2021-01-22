import {
  GLOBAL_GET_LIST_GRAMMAR_START,
  GLOBAL_GET_LIST_GRAMMAR_SUCCESS,
  GLOBAL_GET_LIST_GRAMMAR_FAILED,
  GLOBAL_GET_SINGLE_GRAMMAR_START,
  GLOBAL_GET_SINGLE_GRAMMAR_SUCCESS,
  GLOBAL_GET_SINGLE_GRAMMAR_FAILED,
  ADMIN_CREATE_GRAMMAR_START,
  ADMIN_CREATE_GRAMMAR_SUCCESS,
  ADMIN_CREATE_GRAMMAR_FAILED,
  ADMIN_UPDATE_GRAMMAR_START,
  ADMIN_UPDATE_GRAMMAR_SUCCESS,
  ADMIN_UPDATE_GRAMMAR_FAILED,
  ADMIN_DELETE_GRAMMAR_START,
  ADMIN_DELETE_GRAMMAR_SUCCESS,
  ADMIN_DELETE_GRAMMAR_FAILED,
} from "../../actions/types";

const reducer = (
  state = {
    loading: false,
    error: null,
    data: {
      grammars: [],
    },
  },
  { type, payload }
) => {
  switch (type) {
    case GLOBAL_GET_LIST_GRAMMAR_START:
    case ADMIN_CREATE_GRAMMAR_START:
    case ADMIN_UPDATE_GRAMMAR_START:
    case ADMIN_DELETE_GRAMMAR_START:
      return {
        ...state,
        loading: true,
      };
    case GLOBAL_GET_LIST_GRAMMAR_SUCCESS:
      return {
        loading: false,
        error: null,
        data: payload,
      };
    case ADMIN_CREATE_GRAMMAR_SUCCESS:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          grammars: [payload, ...state.data.grammars],
        },
      };
    case ADMIN_DELETE_GRAMMAR_SUCCESS:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          grammars: state.data.grammars.filter((g) => g.grammar_id !== payload),
        },
      };
    case ADMIN_UPDATE_GRAMMAR_SUCCESS:
      return {
        loading: false,
        error: null,
        data: {
          ...state.data,
          grammars: state.data.grammars.map((g) =>
            g.grammar_id === payload.id ? payload.grammar : g
          ),
        },
      };
    case GLOBAL_GET_LIST_GRAMMAR_FAILED:
    case ADMIN_CREATE_GRAMMAR_FAILED:
    case ADMIN_UPDATE_GRAMMAR_FAILED:
    case ADMIN_DELETE_GRAMMAR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

const singleGrammarReducer = (
  state = {
    loading: false,
    error: null,
    data: {},
  },
  { type, payload }
) => {
  switch (type) {
    case GLOBAL_GET_SINGLE_GRAMMAR_START:
      return {
        ...state,
        loading: true,
      };
    case GLOBAL_GET_SINGLE_GRAMMAR_SUCCESS:
      return {
        loading: false,
        error: null,
        data: payload,
      };
    case GLOBAL_GET_SINGLE_GRAMMAR_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default reducer;

export { singleGrammarReducer };
