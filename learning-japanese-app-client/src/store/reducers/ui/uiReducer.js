import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  SIDEBAR_TOGGLE,
  ALERT_ADD,
  ALERT_REMOVE,
  SWITCH_DARK_MODE,
  LOGOUT,
} from "../../actions/types";

if (
  localStorage.getItem("darkMode") &&
  localStorage.getItem("darkMode") === "true"
) {
  document.querySelector("body").classList.add("dark-mode");
}

const initialState = {
  showSidebar: false,
  alertList: [],
  darkMode:
    localStorage.getItem("darkMode") &&
    localStorage.getItem("darkMode") === "true"
      ? true
      : false,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIDEBAR_SHOW:
      return {
        ...state,
        showSidebar: true,
      };
    case SIDEBAR_HIDE:
      return {
        ...state,
        showSidebar: false,
      };
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        showSidebar: !state.showSidebar,
      };
    case ALERT_ADD:
      return {
        ...state,
        alertList: [...state.alertList, payload],
      };
    case ALERT_REMOVE:
      return {
        ...state,
        alertList: state.alertList.filter((alert) => alert.id !== payload),
      };
    case SWITCH_DARK_MODE:
      localStorage.setItem("darkMode", !state.darkMode);
      if (!state.darkMode) {
        document.querySelector("body").classList.add("dark-mode");
      } else {
        document.querySelector("body").classList.remove("dark-mode");
      }
      return {
        ...state,
        darkMode: !state.darkMode,
      };
    case LOGOUT:
      document.querySelector("body").classList.remove("dark-mode");
      return {
        ...state,
        darkMode: false,
      };
    default:
      return state;
  }
};

export default reducer;