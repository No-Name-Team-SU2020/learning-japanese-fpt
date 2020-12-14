import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getLessons } from "../../../store/actions/admin/lesson";
import Loader from "../../../components/ui/Loader/Loader";

const LessonBySubject = () => {
  const { lessonList, loading } = useSelector((state) => state.adminLessonList);
  const dispatch = useDispatch();
  const { sId } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getLessons(sId));
  }, [sId, dispatch]);

  return (
    <div>
      <h1>Lesson Grammar follow by Subject</h1>
      {loading && <Loader />}
      {lessonList.map((lesson) => (
        <div
          key={lesson.lesson_id}
          className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
        >
          <span
            onClick={() => history.push(`/grammars/${lesson.lesson_id}`)}
            className='cursor-pointer hover-text-blue'
          >
            <strong>{lesson.lesson_name} : </strong>
            {lesson.lesson_content.substr(0, 50)}
          </span>
          <Link
            to={`/quiz/${lesson.lesson_id}?lCt=${lesson.lesson_content}`}
            className='font-weight-bold'
          >
            Start Quiz
          </Link>
        </div>
      ))}
      <Link to='/' className='font-weight-bold'>
        &#8592; Go Back Home
      </Link>
    </div>
  );
};

export default LessonBySubject;
