import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createClass } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";

const CreateClassForm = () => {
  const history = useHistory();
  const { loading, error } = useSelector((state) => state.adminClassList);
  const dispatch = useDispatch();

  const [newClass, setNewClass] = useState({
    class_name: "",
    class_id: "",
  });

  const handleChange = (e) => {
    setNewClass((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createClass(newClass));
    setNewClass({
      class_name: "",
      class_id: "",
    });
  };
  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3 className='my-4'>Create class</h3>
      <form onSubmit={submitHandler}>
        {/* <Grid container spacing={3}>
          <Grid item md={4}>
            Class ID:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Class Identifier'
              variant='outlined'
              name='class_id'
              required
              fullWidth
              value={newClass.class_id}
              onChange={handleChange}
            />
          </Grid>
        </Grid> */}
        <Grid container spacing={3}>
          <Grid item md={4}>
            Class name:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Class name:'
              variant='outlined'
              name='class_name'
              required
              fullWidth
              value={newClass.class_name}
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
              onClick={() => history.push('/manage-class')}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateClassForm;
