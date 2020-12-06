import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import FilterQuestionEngine from "../../components/formElement/FilterQuestionEngine/FilterQuestionEngine";
import FilterQuestionEngineSkeleton from "../../components/formElement/FilterQuestionEngine/Skeleton";
import QuestionsTable from "../../components/pagesComponent/QuestionsTable/QuestionsTable";
import Loader from "../../components/ui/Loader/Loader";
import {
  getQuestions,
  getSubjects,
  getLessons,
} from "../../store/actions/admin";

const QuestionList = () => {
  const history = useHistory();
  const { loading, error, questionList } = useSelector(
    (state) => state.adminQuestionList
  );
  const adminSubjectList = useSelector((state) => state.adminSubjectList);
  const adminLessonList = useSelector((state) => state.adminLessonList);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState(localStorage.getItem('subject') ? localStorage.getItem('subject') : 'JPD111');
  const [lesson, setLesson] = useState( localStorage.getItem('lesson') ? localStorage.getItem('lesson') : "1");

  useEffect(() => {
    dispatch(getSubjects());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getLessons(subject));
  }, [dispatch, subject]);

  useEffect(() => {
    dispatch(getQuestions(lesson));
  }, [dispatch, lesson]);

  return (
    <div className='app-container'>
      <div className='d-flex justify-content-between align-item-center'>
        <h1>Question List Table</h1>
        <Button variant="contained" color="primary" onClick={() => history.push('/manage-question/create')}>
          New Question
        </Button>
      </div>
      {error && (
        <div className='alert alert-danger mt-3' role='alert'>
          
          {error}
        </div>
      )}
      {adminSubjectList.error && (
        <div className='alert alert-danger mt-3' role='alert'>
          
          {adminSubjectList.error}
        </div>
      )}
      {adminLessonList.error && (
        <div className='alert alert-danger mt-3' role='alert'>
 
          {adminLessonList.error}
        </div>
      )}
      {adminSubjectList.loading || adminLessonList.loading ? (
        <FilterQuestionEngineSkeleton />
      ) : (
        <FilterQuestionEngine
          lesson={lesson}
          subject={subject}
          changeLesson={setLesson}
          changeSubject={setSubject}
          lessons={adminLessonList.lessonList}
          subjects={adminSubjectList.subjectList}
        />
      )}
      {loading ? <Loader /> : <QuestionsTable questionList={questionList} />}
    </div>
  );
};

export default QuestionList;
