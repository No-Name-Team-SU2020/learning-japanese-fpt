import React, { useState, useEffect } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";
import { MenuItem, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getLessons } from "../../../store/actions/admin/lesson";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import { Pie } from "react-chartjs-2";

const ManageProgressByClass = ({ match, location }) => {
  const sId = location?.search.split("=")[1];
  const { cId } = match.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [progressData, setProgressData] = useState({});
  const [lessonId, setLessonId] = useState(1);
  const { lessonList } = useSelector((state) => state.adminLessonList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessons(sId));
  }, [dispatch, sId]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/teacher/lessons/${lessonId}/progress/${cId}`)
      .then((res) => {
        setLoading(false);
        if (res.data.data) {
          setProgressData(res.data.data);
        }
      })
      .catch(() => {
        setLoading(false);
        setError("Something went wrong");
      });
  }, [cId, lessonId]);

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
            <MenuItem value=''>Choose lesson</MenuItem>
            {lessonList?.map((option) => (
              <MenuItem key={option.lesson_id} value={option.lesson_id}>
                {option.lesson_name}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
      {loading && <Loader />}
      {error && (
        <div className='alert alert-danger mb-2'>
          {error || "Something went wrong"}
        </div>
      )}
      {!loading &&
        progressData.top_student &&
        progressData.count_total &&
        progressData.total_score && (
          <div className='w-75 mx-auto my-3'>
            <div className='shadow p-3 rounded'>
              <div className='header'>
                <h4>
                  Total number of true/false question follow by class & question
                </h4>
              </div>
              <Pie
                data={{
                  labels: ["True", "False"],
                  datasets: [
                    {
                      label: "# True & False",
                      data: [
                        Math.round(
                          (Number(progressData.total_score[0].total_score) *
                            100) /
                            (+progressData.count_total.count * 10)
                        ),
                        100 -
                          Math.round(
                            (Number(progressData.total_score[0].total_score) *
                              100) /
                              (+progressData.count_total.count * 10)
                          ),
                      ],
                      backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                      ],
                      borderColor: [
                        "rgba(255, 99, 132, 1)",
                        "rgba(54, 162, 235, 1)",
                      ],
                      borderWidth: 1,
                    },
                  ],
                }}
              />
            </div>
            <div className='top-5'>
              <h4 className='mt-3'>Five student best score</h4>
              <TableContainer className='shadow rounded'>
                <Table aria-label='lessons table'>
                  <TableHead>
                    <TableRow>
                      <TableCell>Student ID</TableCell>
                      <TableCell>Student Name</TableCell>
                      <TableCell>Score (Percentage) </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {progressData.top_student?.map((student) => (
                      <TableRow key={student.student_id}>
                        <TableCell>{student.student_id}</TableCell>
                        <TableCell>{student.student.student_name}</TableCell>
                        <TableCell>{student.percentage} %</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        )}
    </div>
  );
};

export default ManageProgressByClass;
