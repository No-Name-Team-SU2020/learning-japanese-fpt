import {
  SIDEBAR_SHOW,
  SIDEBAR_HIDE,
  SIDEBAR_TOGGLE,
  ALERT_ADD,
  ALERT_REMOVE,
  ALERT,
  SWITCH_DARK_MODE,
} from "../types";

export const showSidebar = () => ({ type: SIDEBAR_SHOW });

export const hideSidebar = () => ({ type: SIDEBAR_HIDE });

export const switchDarkMode = () => ({ type: SWITCH_DARK_MODE });

export const toggleSidebar = () => ({ type: SIDEBAR_TOGGLE });

export const alert = (alertType, message) => ({
  type: ALERT,
  alertType,
  message,
});

export const addAlert = (alert) => ({ type: ALERT_ADD, payload: alert });

export const removeAlert = (alertId) => ({
  type: ALERT_REMOVE,
  payload: alertId,
});
