import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useSelector, useDispatch } from "react-redux";
import { createClass } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";
import {
  containManySpaceCharacters,
  containSpecialCharacters,
} from "../../../utils/validators";
import { alert } from "../../../store/actions/ui/ui";

const CreateClassForm = () => {
  const { loading, error } = useSelector((state) => state.adminClassList);
  const dispatch = useDispatch();

  const [newClass, setNewClass] = useState({
    class_name: "",
  });

  const handleChange = (e) => {
    setNewClass((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      containManySpaceCharacters(newClass.class_name) ||
      containSpecialCharacters(newClass.class_name)
    ) {
      dispatch(
        alert(
          "error",
          "Class name should not contain special characters or many space"
        )
      );
    } else {
      dispatch(
        createClass({
          class_name: newClass.class_name.trim(),
        })
      );
      setNewClass({
        class_name: "",
      });
    }
  };
  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3 className='my-4'>Create class</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Class name:
          </Grid>
          <Grid item md={8}>
            <TextField
              type='text'
              label='Class name:'
              variant='outlined'
              name='class_name'
              required
              fullWidth
              value={newClass.class_name}
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
              onClick={() => {
                window.location.href = '/manage-class';
              } }
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
