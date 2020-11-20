import { SIDEBAR_SHOW, SIDEBAR_HIDE, SIDEBAR_TOGGLE, ALERT_ADD, ALERT_REMOVE } from '../../actions/types';

const initialState = {
  showSidebar: false,
  alertList: []
}

const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case SIDEBAR_SHOW:
      return {
        ...state,
        showSidebar: true
      }
    case SIDEBAR_HIDE:
      return {
        ...state,
        showSidebar: false
      }
    case SIDEBAR_TOGGLE:
      return {
        ...state,
        showSidebar: !state.showSidebar
      }
    case ALERT_ADD:
      return {
        ...state,
        alertList: [...state.alertList, payload]
      }
    case ALERT_REMOVE:
      return {
        ...state,
        alertList: state.alertList.filter(alert => alert.id !== payload)
      }
    default: return state;
  }
}

export default reducer;