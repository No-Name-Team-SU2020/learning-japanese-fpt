import { SIDEBAR_SHOW, SIDEBAR_HIDE, SIDEBAR_TOGGLE } from '../types';

export const showSidebar = () => ({ type: SIDEBAR_SHOW });

export const hideSidebar = () => ({ type: SIDEBAR_HIDE });

export const toggleSidebar = () => ({ type: SIDEBAR_TOGGLE });