import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/ui/Loader/Loader";
import { getLessons } from "../../../store/actions/admin/lesson";
import axios from "../../../store/api/axios";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Attendance = ({ match }) => {
  const { sId } = match.params;
  const history = useHistory();
  const { lessonList, loading, error } = useSelector(
    (state) => state.adminLessonList
  );
  const dispatch = useDispatch();
  const [attendanceData, setAttendanceData] = useState({
    loading: false,
    error: null,
    attendances: [],
  });

  useEffect(() => {
    dispatch(getLessons(sId));
  }, [dispatch, sId]);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        setAttendanceData((prevState) => ({
          ...prevState,
          loading: true,
        }));
        const res = await axios.get("/student/attendance");
        setAttendanceData((prevState) => ({
          ...prevState,
          loading: false,
          error: null,
          attendances: res.data.data.attendances,
        }));
      } catch (error) {
        setAttendanceData((prevState) => ({
          ...prevState,
          loading: false,
          error: error.response?.data?.message || "Something went wrong!!",
        }));
      }
    };
    fetchAttendance();
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-md-10'>
          <h5 className='font-weight-bold'>Lesson Name</h5>
          {loading && <Loader />}
          {error && <div className='alert alert-danger mb-2'> {error} </div>}
          {lessonList.map((lesson) => (
            <div
              key={lesson.lesson_id}
              className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
            >
              <span className='cursor-pointer hover-text-blue'>
                <strong>{lesson.lesson_name} : </strong>
                {lesson.lesson_content.substr(0, 50)}
              </span>
            </div>
          ))}
        </div>
        <div className='col-md-2'>
          <h5 className='font-weight-bold'>Status</h5>
          {attendanceData.loading && <Loader />}
          {attendanceData.error && (
            <div className='alert alert-danger mb-2'> {error} </div>
          )}
          {lessonList.map((lesson) => (
            <div
              key={lesson.lesson_id}
              className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
            >
              <span className='cursor-pointer font-weight-bold'>
                {!attendanceData.loading &&
                !attendanceData.error &&
                attendanceData.attendances &&
                attendanceData.attendances.find(
                  (item) => item.lesson_id === lesson.lesson_id
                ) ? (
                  <span className='text-success'>Present </span>
                ) : (
                  <span className='text-danger'>Not Present </span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
      <Button onClick={() => history.goBack()} variant='contained'>
        Go Back
      </Button>
    </div>
  );
};

export default Attendance;
