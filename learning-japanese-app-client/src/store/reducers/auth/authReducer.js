import * as actionTypes from "../../actions/types";
import jwtDecode from "jwt-decode";
import history from "../../../utils/history";

let refreshToken = localStorage.getItem("refreshToken");

if (refreshToken) {
  const decodedToken = jwtDecode(refreshToken);

  if (decodedToken.exp * 1000 < new Date().getTime()) {
    refreshToken = null;
  }
}

const initialState = {
  isAuthenticated: refreshToken ? true : false,
  token: refreshToken ? refreshToken : null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionTypes.AUTH_USER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.AUTH_USER_SUCCESS:
      localStorage.setItem("refreshToken", payload.refreshToken);
      return {
        loading: false,
        isAuthenticated: true,
        token: payload.refreshToken,
        error: null,
      };
    case actionTypes.AUTH_USER_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    case actionTypes.LOGOUT:
      history.push("/");
      localStorage.removeItem("refreshToken");
      localStorage.setItem("menuPosition", 0);
      return {
        loading: false,
        isAuthenticated: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
