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
    subject_id: "",
    semester: "",
    no_credit: "",
    pre_requisite: "",
  });

  const handleChange = (e) => {
    setSubject((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createSubject(subject));
    setSubject({
      subject_name: "",
      subject_id: "",
      semester: "",
      no_credit: "",
      pre_requisite: "",
    });
  };
  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3 className='my-4'>Create Subject</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Subject ID:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Subject Identifier'
              variant='outlined'
              name='subject_id'
              required
              fullWidth
              value={subject.subject_id}
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
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Semester :
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Semester:'
              variant='outlined'
              name='semester'
              fullWidth
              value={subject.semester}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            No Credit :
          </Grid>
          <Grid item md={8}>
            <TextField
              label='No Credit :'
              variant='outlined'
              name='no_credit'
              fullWidth
              value={subject.no_credit}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Pre Requisite :
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Pre Requisite :'
              variant='outlined'
              name='pre_requisite'
              fullWidth
              value={subject.pre_requisite}
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