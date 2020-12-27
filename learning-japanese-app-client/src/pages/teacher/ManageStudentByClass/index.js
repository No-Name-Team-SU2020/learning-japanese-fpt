import React, { useState, useEffect } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  MenuItem,
  TextField,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import DoneIcon from "@material-ui/icons/Done";
import { useSelector, useDispatch } from "react-redux";
import { getLessons } from "../../../store/actions/admin/lesson";
import { alert } from "../../../store/actions/ui/ui";

const ManageStudentByClass = ({ match, location }) => {
  let sId, isResult;
  var params = new URLSearchParams(location?.search);
  for (let p of params) {
    if (p[0] === "sId") {
      sId = p[1];
    }
    if (p[0] === "isResult") {
      isResult = p[1];
    }
  }
  const { cId } = match.params;
  const [loading, setLoading] = useState(false);
  const [classData, setClassData] = useState({});
  const [lessonId, setLessonId] = useState(1);
  const { lessonList } = useSelector((state) => state.adminLessonList);
  const [attendanceResponse, setAttendanceResponse] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    if (sId) {
      dispatch(getLessons(+sId));
    }
  }, [dispatch, sId]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/teacher/lessons/${lessonId}/class-students/${cId}`)
      .then((res) => {
        setLoading(false);
        if (res.data.data && res.data.data[0]) {
          setClassData(res.data.data[0]);
        }
      })
      .catch((err) => {
        setLoading(false);
        alert("Something went wrong");
      });
  }, [cId, lessonId]);

  const attendanceHandler = async (data) => {
    if (data) {
      setAttendanceResponse((prevState) => ({
        ...prevState,
        loading: true,
      }));
      try {
        const res = await axios.post("/teacher/attendance", data, {
          "Content-type": "application/json",
          Accept: "application/json",
        });
        dispatch(alert("success", "Update attendance successfully"));
        setClassData((prevState) => ({
          ...prevState,
          students: prevState.students.map((s) =>
            s.student_id === data.student_id
              ? {
                  ...s,
                  is_attendeds: [res.data?.data?.attendance],
                }
              : s
          ),
        }));
        setAttendanceResponse((prevState) => ({
          ...prevState,
          loading: false,
          data: res.data.data,
        }));
      } catch (error) {
        setAttendanceResponse((prevState) => ({
          ...prevState,
          loading: false,
          error: error.response?.data?.message || "Something went wrong",
        }));
        dispatch(alert("danger", "Update attendance failed"));
      }
    }
  };
  return (
    <div>
      <h3 className='mb-3'>Student List</h3>
      <div className='row'>
        <div className='col-md-3'>
          <TextField
            select
            value={lessonId}
            onChange={(e) => {
              setLessonId(+e.target.value);
            }}
            label='Choose a lesson'
            fullWidth
            variant='outlined'
          >
            {/* <MenuItem value=''>Choose lesson</MenuItem> */}
            {lessonList?.map((option) => (
              <MenuItem key={option.lesson_id} value={option.lesson_id}>
                {option.lesson_name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      {loading && <Loader />}
      {!loading && classData.class_name && (
        <>
          <h3>Class {classData?.class_name}</h3>
          <TableContainer className='shadow rounded'>
            <Table aria-label='lessons table'>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>User Name</TableCell>
                  {isResult === "1" && <TableCell>Review</TableCell>}
                  {isResult === "0" && <TableCell>Attendance</TableCell>}
                </TableRow>
              </TableHead>
              <TableBody>
                {classData?.students?.map((student, index) => (
                  <TableRow key={student.student_id}>
                    <TableCell component='th' scope='row'>
                      {index}
                    </TableCell>
                    <TableCell>
                      <img
                        src={
                          student.student_image ||
                          "https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130"
                        }
                        alt=''
                        className='student-avatar'
                      />
                    </TableCell>
                    <TableCell>{student.student_name}</TableCell>
                    <TableCell>{student.user_name}</TableCell>
                    {isResult === "1" && (
                      <TableCell>
                        <Link to={`/student-quiz-result/${student.student_id}`}>
                          View
                        </Link>
                      </TableCell>
                    )}
                    {isResult === "0" && (
                      <TableCell>
                        {attendanceResponse.loading ? (
                          <Loader />
                        ) : (
                          <>
                            {student.is_attendeds?.length > 0 ? (
                              <span className='text-success'>Present</span>
                            ) : (
                              <>
                                <span className='text-danger'>Absent</span>
                                <IconButton
                                  onClick={() =>
                                    attendanceHandler({
                                      student_id: student.student_id,
                                      class_id: cId,
                                      lesson_id: lessonId,
                                    })
                                  }
                                >
                                  <DoneIcon color='primary' />
                                </IconButton>
                              </>
                            )}
                          </>
                        )}
                      </TableCell>
                    )}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ManageStudentByClass;
