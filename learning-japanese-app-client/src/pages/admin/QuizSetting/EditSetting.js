import { TextField, Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import { useDispatch, useSelector } from "react-redux";
import { createQuizPreset } from "../../../store/actions/admin";
import { useHistory } from "react-router-dom";

const EditSetting = ({ match }) => {
  console.log(match.params);
  const dispatch = useDispatch();
  const history = useHistory();
  const [newSetting, setNewSetting] = useState({
    number_of_questions: 0,
    quiz_time: 0,
  });
  const { loading } = useSelector((state) => state.quizPreset);
  useEffect(() => {}, []);
  const handleChange = (e) => {
    e.persist();
    const value = parseInt(e.target.value);
    if (value >= 0 && value <= 20) {
      setNewSetting((prevState) => ({
        ...prevState,
        [e.target.name]: value,
      }));
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(createQuizPreset(newSetting));
    setTimeout(() => {
      setNewSetting({
        number_of_questions: 0,
        quiz_time: 0,
      });
    }, 500);
  };
  return (
    <div className='w-50 mx-auto my-4'>
      <h3>Edit Quiz Setting</h3>
      <form className='my-3' onSubmit={submitHandler}>
        <TextField
          label='Number Of Questions'
          variant='outlined'
          name='number_of_questions'
          required
          fullWidth
          type='number'
          value={newSetting.number_of_questions}
          onChange={handleChange}
        />
        <TextField
          label='Quiz Time'
          variant='outlined'
          name='quiz_time'
          required
          fullWidth
          type='number'
          value={newSetting.quiz_time}
          onChange={handleChange}
        />
        {loading && <Loader />}
        <Button
          type='submit'
          variant='contained'
          color='primary'
          className='mr-3 bg-orange-imp'
        >
          Update
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => history.goBack()}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
};

export default EditSetting;
