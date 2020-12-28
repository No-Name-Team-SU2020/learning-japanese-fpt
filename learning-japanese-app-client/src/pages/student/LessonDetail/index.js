import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/ui/Loader/Loader";
import { getLessons } from "../../../store/actions/admin/lesson";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";

const LessonDetail = ({ match, location }) => {
  const { lId } = match.params;
  const [lessonDetail, setLessonDetail] = useState({});
  const dispatch = useDispatch();
  const history = useHistory();
  const [resultResponse] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const { loading, error, lessonList } = useSelector(
    (state) => state.adminLessonList
  );
  useEffect(() => {
    if (lessonList.length > 0) {
      setLessonDetail(lessonList.find((l) => l.lesson_id === Number(lId)));
    }
  }, [lId, lessonList]);
  useEffect(() => {
    if (lessonList.length === 0) {
      dispatch(getLessons(location.search.split("=")[1]));
    }
  }, [lessonList.length, dispatch, location.search]);

  return (
    <div>
      {loading && <Loader />}
      {error && <div className='alert alert-danger'> {error} </div>}
      {!loading && !error && (
        <>
          <h3>{lessonDetail?.lesson_name}</h3>
          <div className='p-3 bg-light'>
            <p className='lead'> {lessonDetail?.lesson_content} </p>
            <div
              className={`p-2 badge badge-${
                lessonDetail?.is_attendeds?.length > 0 ? "success" : "danger"
              }`}
            >
              {lessonDetail?.is_attendeds?.length > 0 ? "Present" : "Absent"}
            </div>
          </div>
        </>
      )}
      {resultResponse.loading && <Loader />}
      {resultResponse.error && (
        <div className='alert alert-danger mt-2'> {error} </div>
      )}
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

export default LessonDetail;