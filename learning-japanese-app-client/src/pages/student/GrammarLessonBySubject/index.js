import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getLessons } from "../../../store/actions/admin/lesson";
import Loader from "../../../components/ui/Loader/Loader";
import { Button } from "@material-ui/core";

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
      <h1>Lesson List</h1>
      {loading && <Loader />}
      {lessonList.map((lesson) => (
        <div
          key={lesson.lesson_id}
          className="shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded"
        >
          <span
            onClick={() => history.push(`/grammars/${lesson.lesson_id}`)}
            className="cursor-pointer hover-text-blue"
          >
            <strong>{lesson.lesson_name}</strong>
          </span>
          {/* {lesson.is_attendeds.length > 0 ? (
            <Link
              to={`/quiz/${lesson.lesson_id}?lCt=${lesson.lesson_content}`}
              className='font-weight-bold'
            >
              Start Quiz
            </Link>
          ) : (
            <p>Please Attend Lesson</p>
          )} */}
        </div>
      ))}
      <Button
        className="my-3"
        variant="contained"
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default LessonBySubject;
