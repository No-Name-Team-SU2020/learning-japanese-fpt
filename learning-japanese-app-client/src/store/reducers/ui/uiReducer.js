import { SIDEBAR_SHOW, SIDEBAR_HIDE, SIDEBAR_TOGGLE } from '../../actions/types';

const initialState = {
  showSidebar: false
}

const reducer = (state = initialState, action) => {
  switch (action.type)
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
    default: return state;
  }
}

export default reducer;