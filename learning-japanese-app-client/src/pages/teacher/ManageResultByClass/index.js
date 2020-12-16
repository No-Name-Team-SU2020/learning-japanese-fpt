import React, { useState, useEffect } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";
import { MenuItem, TextField } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getLessons } from "../../../store/actions/admin/lesson";
import { alert } from "../../../store/actions/ui/ui";

const ManageResultByClass = ({ match, location }) => {
  const sId = location?.search.split("=")[1];
  const { cId } = match.params;
  const [loading, setLoading] = useState(false);
  const [classData, setClassData] = useState({});
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
          console.log(res.data.data);
        }
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong");
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
        </>
      )}
    </div>
  );
};

export default ManageResultByClass;
