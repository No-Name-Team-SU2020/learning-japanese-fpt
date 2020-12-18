import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleLesson, updateLesson } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";

const EditLessonForm = ({ subjectId }) => {
  const { lId } = useParams();
  const history = useHistory();
  const { loading, error } = useSelector((state) => state.adminClassList);
  const singleLesson = useSelector((state) => state.singleLesson);
  const dispatch = useDispatch();

  const [lesson, setLesson] = useState({
    lesson_name: "",
    lesson_content: "",
  });

  useEffect(() => {
    if (lId) dispatch(getSingleLesson(lId));
  }, [lId, dispatch]);

  useEffect(() => {
    if (singleLesson.lesson && singleLesson.lesson.lesson_id) {
      setLesson(singleLesson.lesson);
    }
  }, [singleLesson.lesson]);

  const handleChange = (e) => {
    setLesson((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateLesson(lesson.lesson_id, lesson));
  };
  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3 className='my-4'>Edit Lesson</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Lesson Name:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Lesson Name:'
              variant='outlined'
              name='lesson_name'
              required
              fullWidth
              value={lesson.lesson_name}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Lesson Content:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Lesson Content:'
              variant='outlined'
              name='lesson_content'
              required
              fullWidth
              value={lesson.lesson_content}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        {loading && <Loader />}
        {error && (
          <div className='alert alert-danger' role='alert'>
            {error}
          </div>
        )}
        <Grid container spacing={3}>
          <Grid item md={4}></Grid>
          <Grid item md={8}>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className='mr-3'
            >
              Update
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => history.push("/manage-lesson/" + subjectId)}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditLessonForm;
