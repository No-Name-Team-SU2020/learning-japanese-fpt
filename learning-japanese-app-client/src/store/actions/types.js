
// UI ACTIONS

export const SIDEBAR_SHOW = 'SIDEBAR_SHOW';
export const SIDEBAR_HIDE = 'SIDEBAR_HIDE';
export const SIDEBAR_TOGGLE = 'SIDEBAR_TOGGLE';

export const ALERT = 'ALERT';
export const ALERT_ADD = 'ALERT_ADD';
export const ALERT_REMOVE = 'ALERT_REMOVE';

// AUTH ACTIONS

export const AUTH_USER = 'AUTH_USER';
export const AUTH_USER_START = 'AUTH_USER_START';
export const AUTH_USER_SUCCESS = 'AUTH_USER_SUCCESS';
export const AUTH_USER_FAILED = 'AUTH_USER_FAILED';

export const AUTH_CHECK_TOKEN_EXPIRATION = 'AUTH_CHECK_TOKEN_EXPIRATION';
export const LOGOUT = 'LOGOUT';

// user actions

export const USER_GET_PROFILE = 'USER_GET_PROFILE';
export const USER_GET_PROFILE_START = 'USER_GET_PROFILE_START';
export const USER_GET_PROFILE_SUCCESS = 'USER_GET_PROFILE_SUCCESS';
export const USER_GET_PROFILE_FAILED = 'USER_GET_PROFILE_FAILED';
export const USER_CLEAR_PROFILE = 'USER_CLEAR_PROFILE';

// global actions

export const GLOBAL_FIND_QUESTION = 'GLOBAL_FIND_QUESTION';
export const GLOBAL_FIND_QUESTION_SUCCESS = 'GLOBAL_FIND_QUESTION_SUCCESS';
export const GLOBAL_FIND_QUESTION_START = 'GLOBAL_FIND_QUESTION_START';
export const GLOBAL_FIND_QUESTION_FAILED = 'GLOBAL_FIND_QUESTION_FAILED';

export const GLOBAL_GET_SINGLE_QUESTION = 'GLOBAL_GET_SINGLE_QUESTION';
export const GLOBAL_GET_SINGLE_QUESTION_SUCCESS = 'GLOBAL_GET_SINGLE_QUESTION_SUCCESS';
export const GLOBAL_GET_SINGLE_QUESTION_START = 'GLOBAL_GET_SINGLE_QUESTION_START';
export const GLOBAL_GET_SINGLE_QUESTION_FAILED = 'GLOBAL_GET_SINGLE_QUESTION_FAILED';

// student actions

// teacher actions

export const TEACHER_GET_MY_CLASSES = 'TEACHER_GET_MY_CLASSES';
export const TEACHER_GET_MY_CLASSES_START = 'TEACHER_GET_MY_CLASSES_START';
export const TEACHER_GET_MY_CLASSES_SUCCESS = 'TEACHER_GET_MY_CLASSES_SUCCESS';
export const TEACHER_GET_MY_CLASSES_FAILED = 'TEACHER_GET_MY_CLASSES_FAILED';

export const TEACHER_GET_CLASSES_BY_SUBJECT = 'TEACHER_GET_CLASSES_BY_SUBJECT';
export const TEACHER_GET_CLASSES_BY_SUBJECT_START = 'TEACHER_GET_CLASSES_BY_SUBJECT_START';
export const TEACHER_GET_CLASSES_BY_SUBJECT_SUCCESS = 'TEACHER_GET_CLASSES_BY_SUBJECT_SUCCESS';
export const TEACHER_GET_CLASSES_BY_SUBJECT_FAILED = 'TEACHER_GET_CLASSES_BY_SUBJECT_FAILED';

export const TEACHER_GET_MY_SUBJECTS = 'TEACHER_GET_MY_SUBJECTS';
export const TEACHER_GET_MY_SUBJECTS_START = 'TEACHER_GET_MY_SUBJECTS_START';
export const TEACHER_GET_MY_SUBJECTS_SUCCESS = 'TEACHER_GET_MY_SUBJECTS_SUCCESS';
export const TEACHER_GET_MY_SUBJECTS_FAILED = 'TEACHER_GET_MY_SUBJECTS_FAILED';

export const TEACHER_GET_STUDENTS_BY_CLASS = 'TEACHER_GET_STUDENTS_BY_CLASS';
export const TEACHER_GET_STUDENTS_BY_CLASS_START = 'TEACHER_GET_STUDENTS_BY_CLASS_START';
export const TEACHER_GET_STUDENTS_BY_CLASS_SUCCESS = 'TEACHER_GET_STUDENTS_BY_CLASS_SUCCESS';
export const TEACHER_GET_STUDENTS_BY_CLASS_FAILED = 'TEACHER_GET_STUDENTS_BY_CLASS_FAILED';

// admin actions

 // 1, QUESTION
export const ADMIN_GET_QUESTIONS = 'ADMIN_GET_QUESTIONS';
export const ADMIN_GET_QUESTIONS_START = 'ADMIN_GET_QUESTIONS_START';
export const ADMIN_GET_QUESTIONS_SUCCESS = 'ADMIN_GET_QUESTIONS_SUCCESS';
export const ADMIN_GET_QUESTIONS_FAILED = 'ADMIN_GET_QUESTIONS_FAILED';

export const ADMIN_CREATE_QUESTION = 'ADMIN_CREATE_QUESTION';
export const ADMIN_CREATE_QUESTION_START = 'ADMIN_CREATE_QUESTION_START';
export const ADMIN_CREATE_QUESTION_SUCCESS = 'ADMIN_CREATE_QUESTION_SUCCESS';
export const ADMIN_CREATE_QUESTION_FAILED = 'ADMIN_CREATE_QUESTION_FAILED';

export const ADMIN_DELETE_QUESTION = 'ADMIN_DELETE_QUESTION';
export const ADMIN_DELETE_QUESTION_START = 'ADMIN_DELETE_QUESTION_START';
export const ADMIN_DELETE_QUESTION_SUCCESS = 'ADMIN_DELETE_QUESTION_SUCCESS';
export const ADMIN_DELETE_QUESTION_FAILED = 'ADMIN_DELETE_QUESTION_FAILED';

export const ADMIN_UPDATE_QUESTION = 'ADMIN_UPDATE_QUESTION';
export const ADMIN_UPDATE_QUESTION_START = 'ADMIN_UPDATE_QUESTION_START';
export const ADMIN_UPDATE_QUESTION_SUCCESS = 'ADMIN_UPDATE_QUESTION_SUCCESS';
export const ADMIN_UPDATE_QUESTION_FAILED = 'ADMIN_UPDATE_QUESTION_FAILED';

// 2, SUBJECT

export const ADMIN_GET_SUBJECTS = 'ADMIN_GET_SUBJECTS';
export const ADMIN_GET_SUBJECTS_START = 'ADMIN_GET_SUBJECTS_START';
export const ADMIN_GET_SUBJECTS_SUCCESS = 'ADMIN_GET_SUBJECTS_SUCCESS';
export const ADMIN_GET_SUBJECTS_FAILED = 'ADMIN_GET_SUBJECTS_FAILED';

export const ADMIN_CREATE_SUBJECT = 'ADMIN_CREATE_SUBJECT';
export const ADMIN_CREATE_SUBJECT_START = 'ADMIN_CREATE_SUBJECT_START';
export const ADMIN_CREATE_SUBJECT_SUCCESS = 'ADMIN_CREATE_SUBJECT_SUCCESS';
export const ADMIN_CREATE_SUBJECT_FAILED = 'ADMIN_CREATE_SUBJECT_FAILED';

export const ADMIN_UPDATE_SUBJECT = 'ADMIN_UPDATE_SUBJECT';
export const ADMIN_UPDATE_SUBJECT_START = 'ADMIN_UPDATE_SUBJECT_START';
export const ADMIN_UPDATE_SUBJECT_SUCCESS = 'ADMIN_UPDATE_SUBJECT_SUCCESS';
export const ADMIN_UPDATE_SUBJECT_FAILED = 'ADMIN_UPDATE_SUBJECT_FAILED';

export const ADMIN_DELETE_SUBJECT = 'ADMIN_DELETE_SUBJECT';
export const ADMIN_DELETE_SUBJECT_START = 'ADMIN_DELETE_SUBJECT_START';
export const ADMIN_DELETE_SUBJECT_SUCCESS = 'ADMIN_DELETE_SUBJECT_SUCCESS';
export const ADMIN_DELETE_SUBJECT_FAILED = 'ADMIN_DELETE_SUBJECT_FAILED';

// 3, LESSON

export const ADMIN_GET_LESSONS = 'ADMIN_GET_LESSONS';
export const ADMIN_GET_LESSONS_START = 'ADMIN_GET_LESSONS_START';
export const ADMIN_GET_LESSONS_SUCCESS = 'ADMIN_GET_LESSONS_SUCCESS';
export const ADMIN_GET_LESSONS_FAILED = 'ADMIN_GET_LESSONS_FAILED';

export const ADMIN_CREATE_LESSON = 'ADMIN_CREATE_LESSON';
export const ADMIN_CREATE_LESSON_START = 'ADMIN_CREATE_LESSON_START';
export const ADMIN_CREATE_LESSON_SUCCESS = 'ADMIN_CREATE_LESSON_SUCCESS';
export const ADMIN_CREATE_LESSON_FAILED = 'ADMIN_CREATE_LESSON_FAILED';

export const ADMIN_GET_SINGLE_LESSON = 'ADMIN_GET_SINGLE_LESSON';
export const ADMIN_GET_SINGLE_LESSON_START = 'ADMIN_GET_SINGLE_LESSON_START';
export const ADMIN_GET_SINGLE_LESSON_SUCCESS = 'ADMIN_GET_SINGLE_LESSON_SUCCESS';
export const ADMIN_GET_SINGLE_LESSON_FAILED = 'ADMIN_GET_SINGLE_LESSON_FAILED';

export const ADMIN_UPDATE_LESSON = 'ADMIN_UPDATE_LESSON';
export const ADMIN_UPDATE_LESSON_START = 'ADMIN_UPDATE_LESSON_START';
export const ADMIN_UPDATE_LESSON_SUCCESS = 'ADMIN_UPDATE_LESSON_SUCCESS';
export const ADMIN_UPDATE_LESSON_FAILED = 'ADMIN_UPDATE_LESSON_FAILED';

export const ADMIN_DELETE_LESSON = 'ADMIN_DELETE_LESSON';
export const ADMIN_DELETE_LESSON_START = 'ADMIN_DELETE_LESSON_START';
export const ADMIN_DELETE_LESSON_SUCCESS = 'ADMIN_DELETE_LESSON_SUCCESS';
export const ADMIN_DELETE_LESSON_FAILED = 'ADMIN_DELETE_LESSON_FAILED';

// 4, CLASS

export const ADMIN_GET_CLASSES = 'ADMIN_GET_CLASSES';
export const ADMIN_GET_CLASSES_START = 'ADMIN_GET_CLASSES_START';
export const ADMIN_GET_CLASSES_SUCCESS = 'ADMIN_GET_CLASSES_SUCCESS';
export const ADMIN_GET_CLASSES_FAILED = 'ADMIN_GET_CLASSES_FAILED';

export const ADMIN_GET_SINGLE_CLASS = 'ADMIN_GET_SINGLE_CLASS';
export const ADMIN_GET_SINGLE_CLASS_START = 'ADMIN_GET_SINGLE_CLASS_START';
export const ADMIN_GET_SINGLE_CLASS_SUCCESS = 'ADMIN_GET_SINGLE_CLASS_SUCCESS';
export const ADMIN_GET_SINGLE_CLASS_FAILED = 'ADMIN_GET_SINGLE_CLASS_FAILED';

export const ADMIN_CREATE_CLASS = 'ADMIN_CREATE_CLASS';
export const ADMIN_CREATE_CLASS_START = 'ADMIN_CREATE_CLASS_START';
export const ADMIN_CREATE_CLASS_SUCCESS = 'ADMIN_CREATE_CLASS_SUCCESS';
export const ADMIN_CREATE_CLASS_FAILED = 'ADMIN_CREATE_CLASS_FAILED';

export const ADMIN_UPDATE_CLASS = 'ADMIN_UPDATE_CLASS';
export const ADMIN_UPDATE_CLASS_START = 'ADMIN_UPDATE_CLASS_START';
export const ADMIN_UPDATE_CLASS_SUCCESS = 'ADMIN_UPDATE_CLASS_SUCCESS';
export const ADMIN_UPDATE_CLASS_FAILED = 'ADMIN_UPDATE_CLASS_FAILED';

export const ADMIN_DELETE_CLASS = 'ADMIN_DELETE_CLASS';
export const ADMIN_DELETE_CLASS_START = 'ADMIN_DELETE_CLASS_START';
export const ADMIN_DELETE_CLASS_SUCCESS = 'ADMIN_DELETE_CLASS_SUCCESS';
export const ADMIN_DELETE_CLASS_FAILED = 'ADMIN_DELETE_CLASS_FAILED';

export const STUDENT_SUBMIT_ANSWERS = 'STUDENT_SUBMIT_ANSWERS';
export const STUDENT_SUBMIT_ANSWERS_START = 'STUDENT_SUBMIT_ANSWERS_START';
export const STUDENT_SUBMIT_ANSWERS_SUCCESS = 'STUDENT_SUBMIT_ANSWERS_SUCCESS';
export const STUDENT_SUBMIT_ANSWERS_FAILED = 'STUDENT_SUBMIT_ANSWERS_FAILED';