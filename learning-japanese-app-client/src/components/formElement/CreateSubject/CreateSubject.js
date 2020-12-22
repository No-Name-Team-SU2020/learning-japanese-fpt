import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createSubject } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";

const CreateSubjectForm = () => {
  const history = useHistory();
  const { loading, error } = useSelector((state) => state.adminSubjectList);
  const dispatch = useDispatch();

  const [subject, setSubject] = useState({
    subject_name: "",
    subject_code: "",
  });

  const handleChange = (e) => {
    setSubject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createSubject({
        subject_name: subject.subject_name.trim(),
        subject_code: subject.subject_code.trim(),
      })
    );
    setSubject({
      subject_name: "",
      subject_code: "",
    });
  };
  return (
    <div className='bg-light p-4 rounded shadow mx-auto w-50'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3 className='my-4'>Create Subject</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Subject Code:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Subject Code'
              variant='outlined'
              name='subject_code'
              required
              fullWidth
              value={subject.subject_code}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Subject name:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Subject name:'
              variant='outlined'
              name='subject_name'
              required
              fullWidth
              value={subject.subject_name}
              inputProps={{ maxLength: 500 }}
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
              className='mr-3 bg-orange-imp'
            >
              Create
            </Button>
            <Button
              variant='contained'
              color='secondary'
              onClick={() => history.goBack()}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateSubjectForm;
