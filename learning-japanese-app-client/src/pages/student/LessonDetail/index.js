import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../../../components/ui/Loader/Loader";
import { getLessons } from "../../../store/actions/admin/lesson";
import axios from "../../../store/api/axios";

const LessonDetail = ({ match, location }) => {
  const { lId } = Number(match.params);
  const [lessonDetail, setLessonDetail] = useState({});
  const dispatch = useDispatch();
  const [resultResponse, setResultResponse] = useState({
    loading: false,
    error: null,
    data: null,
  });
  const { loading, error, lessonList } = useSelector(
    (state) => state.adminLessonList
  );
  useEffect(() => {
    if (lessonList.length > 0) {
      setLessonDetail(lessonList.find((l) => l.lessonId === lId));
    }
  }, [lId, lessonList]);
  useEffect(() => {
    if (lessonList.length === 0) {
      dispatch(getLessons(location.search.split("=")[1]));
    }
  }, [lessonList.length, dispatch, location.search]);

  useEffect(() => {
    if (match.params.lId) {
      const fetchData = () => {
        setResultResponse((prevState) => ({
          ...prevState,
          loading: true,
        }));
        axios
          .get(`/student/quiz_results/${match.params.lId}`)
          .then((res) => {
            setResultResponse({
              loading: false,
              data: res.data.data,
              error: null,
            });
          })
          .catch((err) => {
            setResultResponse((prevState) => ({
              ...prevState,
              loading: false,
              error: err.response?.data?.message || "Something went wrong",
            }));
          });
      };
      fetchData();
    }
  }, [match.params.lId]);
  
  return (
    <div>
      {loading && <Loader />}
      {error && <div className='alert alert-danger'> {error} </div>}
      <h3>{lessonDetail?.lesson_name}</h3>
      <div className='p-3 bg-light'>
        <p className='lead'> {lessonDetail?.lesson_content} </p>
      </div>
      {resultResponse.loading && <Loader />}
      {resultResponse.error && (
        <div className='alert alert-danger mt-2'> {error} </div>
      )}
      {resultResponse.data && (
        <div className='my-3'>
          <h4>Result of quiz {resultResponse.data.quiz_id}</h4>
          <p className='lead'>Score : {resultResponse.data.score} </p>
          <p className='lead'>Time do quiz : ... </p>
          <p>Number of questions failed : xxx</p>
          <Link
            to={`/quiz/${resultResponse.data.quiz_id}`}
            className='font-weight-bold'
          >
            View Quiz &#8594;
          </Link>
        </div>
      )}
    </div>
  );
};

export default LessonDetail;
