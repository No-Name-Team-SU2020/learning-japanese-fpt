import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FilterQuestionEngine from '../../components/formElement/FilterQuestionEngine/FilterQuestionEngine';
import QuestionsTable from '../../components/pagesComponent/QuestionsTable/QuestionsTable';
import Loader from '../../components/ui/Loader/Loader';
import { getQuestions, getSubjects, getLessons } from '../../store/actions/admin';

const QuestionList = () => {
  const { loading, error, questionList } = useSelector(state => state.adminQuestionList);
  const adminSubjectList = useSelector(state => state.adminSubjectList);
  const adminLessonList = useSelector(state => state.adminLessonList);
  const dispatch = useDispatch();
  const [subject, setSubject] = useState('JPD111');
  const [lesson, setLesson] = useState('LS1');

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
    <div className="app-container">
      <h1>Question List Table</h1>

      {
        (loading || adminSubjectList.loading || adminLessonList.loading)  && <Loader />
      }
      {
        error && <div className="alert alert-danger" role="alert"> {error} </div>
      }
      {
        adminSubjectList.error && <div className="alert alert-danger" role="alert"> {adminSubjectList.error} </div>
      }
      {
        adminLessonList.error && <div className="alert alert-danger" role="alert"> {adminLessonList.error} </div>
      }
      <FilterQuestionEngine 
      lesson={lesson}
      subject={subject}
      changeLesson={setLesson} 
      changeSubject={setSubject} 
      lessons={adminLessonList.lessonList}
      subjects={adminSubjectList.subjectList}
      />
      <QuestionsTable questionList={questionList} />
    </div>
  );
}

export default QuestionList;
