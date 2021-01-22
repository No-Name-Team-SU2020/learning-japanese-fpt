import { all } from "redux-saga/effects";
import { authUserWatcher } from "./auth/auth";
import { alertWatcher } from "./ui/ui";
import { getProfileWatcher } from "./user/user";
import {
  adminQuestionsWatcher,
  adminSubjectsWatcher,
  adminlessonsWatcher,
  adminClassWatcher,
  quizPresetWatcher,
  grammarWatcher,
} from "./admin";
import { globalQuestionWatcher } from "./global";
import studentQuizWatcher from "./student/quiz";
import { teacherClassWatcher } from "./teacher/class";
import { teacherSubjectWatcher } from "./teacher/subject";
import studentResultWatcher from "./student/result";

function* rootSaga() {
  yield all([
    authUserWatcher(),
    alertWatcher(),
    getProfileWatcher(),
    adminQuestionsWatcher(),
    adminSubjectsWatcher(),
    adminlessonsWatcher(),
    adminClassWatcher(),
    globalQuestionWatcher(),
    studentQuizWatcher(),
    teacherClassWatcher(),
    teacherSubjectWatcher(),
    studentResultWatcher(),
    quizPresetWatcher(),
    grammarWatcher(),
  ]);
}

export default rootSaga;
