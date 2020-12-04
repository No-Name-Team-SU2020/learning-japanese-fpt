import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getSingleClass, updateClass } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";

const EditClassForm = () => {
  const { cId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [updatedClass, setUpdatedClass] = useState({
    class_name: "",
    class_id: "",
  });
  const { loading, error, singleClass } = useSelector(
    (state) => state.adminSingleClass
  );
  useEffect(() => {
    dispatch(getSingleClass(cId));
  }, [cId, dispatch]);

  useEffect(() => {
    if(singleClass) setUpdatedClass(singleClass);
  }, [singleClass]);

  const handleChange = (e) => {
    setUpdatedClass((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(updateClass(cId, updatedClass));
    history.goBack();
  };

  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3 className='my-4'>Edit Class</h3>
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
              fullWidth
              disabled
              value={updatedClass.class_id}
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
              value={updatedClass.class_name}
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
              onClick={() => history.push("/manage-class")}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default EditClassForm;

