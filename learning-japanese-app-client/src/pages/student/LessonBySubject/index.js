import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getLessons } from "../../../store/actions/admin/lesson";
import Loader from "../../../components/ui/Loader/Loader";
import { getResults } from "../../../store/actions/student/quiz";
import { Button } from "@material-ui/core";

const LessonBySubject = () => {
  const { lessonList, loading, error, d } = useSelector(
    (state) => state.adminLessonList
  );
  const studentResult = useSelector((state) => state.studentResult);

  const dispatch = useDispatch();
  const { sId } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(getLessons(sId));
  }, [sId, dispatch]);

  useEffect(() => {
    dispatch(getResults(sId));
  }, [dispatch, sId]);
  return (
    <div>
      <h1>Lesson follow by Subject</h1>
      {loading && <Loader />}
      {error && <h3> {error || "Something wrong!!!"} </h3>}
      {!studentResult.loading &&
        !loading &&
        lessonList.map((lesson) => (
          <div
            key={lesson.lesson_id}
            className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
          >
            <span
              onClick={() =>
                history.push(`/lesson-detail/${lesson.lesson_id}?sId=${sId}`)
              }
              className='cursor-pointer hover-text-blue'
            >
              <strong>{lesson.lesson_name} </strong>
              {/* {lesson.lesson_content.substr(0, 50)} */}
            </span>
            {lesson.is_attendeds?.length > 0 ? (
              !studentResult.data.find(
                (r) => r.lesson_id === lesson.lesson_id
              ) ? (
                <Link
                  to={`/quiz/${lesson.lesson_id}?lCt=${lesson.lesson_content}`}
                  className='font-weight-bold'
                >
                  Start Quiz
                </Link>
              ) : (
                <span className='text-success'>Done Quiz</span>
              )
            ) : (
              <p>Not Allowed</p>
            )}
          </div>
        ))}
      <Button
        className='my-3'
        variant='contained'
        onClick={() => history.goBack()}
      >
        Go Back
      </Button>
    </div>
  );
};

export default LessonBySubject;
