import {
  ADMIN_GET_CLASSES,
  ADMIN_GET_CLASSES_SUCCESS,
  ADMIN_GET_CLASSES_FAILED,
  ADMIN_GET_CLASSES_START,
  ADMIN_DELETE_CLASS,
  ADMIN_DELETE_CLASS_FAILED,
  ADMIN_DELETE_CLASS_START,
  ADMIN_DELETE_CLASS_SUCCESS,
  ADMIN_CREATE_CLASS_SUCCESS,
  ADMIN_CREATE_CLASS_START,
  ADMIN_CREATE_CLASS_FAILED,
  ADMIN_CREATE_CLASS,
  ADMIN_UPDATE_CLASS_FAILED,
  ADMIN_UPDATE_CLASS, 
  ADMIN_UPDATE_CLASS_SUCCESS,
  ADMIN_UPDATE_CLASS_START,
  ADMIN_GET_SINGLE_CLASS,
  ADMIN_GET_SINGLE_CLASS_START,
  ADMIN_GET_SINGLE_CLASS_SUCCESS,
  ADMIN_GET_SINGLE_CLASS_FAILED
} from "../types";

export const getClasses = () => ({ type: ADMIN_GET_CLASSES });

export const getClassesStart = () => ({ type: ADMIN_GET_CLASSES_START });

export const getClassesFailed = (error) => ({
  type: ADMIN_GET_CLASSES_FAILED,
  payload: error,
});

export const getClassesSuccess = (classes) => ({
  type: ADMIN_GET_CLASSES_SUCCESS,
  payload: classes,
});

export const getSingleClass = (cId) => ({ type: ADMIN_GET_SINGLE_CLASS, cId });

export const getSingleClassStart = () => ({ type: ADMIN_GET_SINGLE_CLASS_START });

export const getSingleClassFailed = (error) => ({
  type: ADMIN_GET_SINGLE_CLASS_FAILED,
  payload: error,
});

export const getSingleClassSuccess = (classItem) => ({
  type: ADMIN_GET_SINGLE_CLASS_SUCCESS,
  payload: classItem,
});

export const deleteClass = (cId) => ({ type: ADMIN_DELETE_CLASS, cId });

export const deleteClassStart = () => ({ type: ADMIN_DELETE_CLASS_START });

export const deleteClassFailed = (error) => ({
  type: ADMIN_DELETE_CLASS_FAILED,
  payload: error,
});

export const deleteClassSuccess = (cId) => ({
  type: ADMIN_DELETE_CLASS_SUCCESS,
  payload: cId,
});

export const createClass = (newClass) => ({ type: ADMIN_CREATE_CLASS, newClass });

export const createClassStart = () => ({ type: ADMIN_CREATE_CLASS_START });

export const createClassFailed = (error) => ({
  type: ADMIN_CREATE_CLASS_FAILED,
  payload: error,
});

export const createClassSuccess = (newClass) => ({
  type: ADMIN_CREATE_CLASS_SUCCESS,
  payload: newClass,
});

export const updateClass = (cId, newClass) => ({ type: ADMIN_UPDATE_CLASS, cId, newClass });

export const updateClassStart = () => ({ type: ADMIN_UPDATE_CLASS_START });

export const updateClassFailed = (error) => ({
  type: ADMIN_UPDATE_CLASS_FAILED,
  payload: error,
});

export const updateClassSuccess = (cId, newClass) => ({
  type: ADMIN_UPDATE_CLASS_SUCCESS,
  payload: { cId, newClass},
});
