import { TextField, Button } from "@material-ui/core";
import React, { useState } from "react";
import ConfirmAction from "../../../components/shared/ConfirmAction";
import Loader from "../../../components/ui/Loader/Loader";
import { useDispatch } from "react-redux";
import { createQuizPreset } from "../../../store/actions/admin";

const CreateSetting = ({ show, close, loading }) => {
  const dispatch = useDispatch();
  const [newSetting, setNewSetting] = useState({
    number_of_questions: 0,
    quiz_time: 0,
  });
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
      close();
    }, 500);
  };
  return (
    <div>
      <ConfirmAction open={show} close={close}>
        <h3>New Setting</h3>
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
            label='Quiz Time (minutes)'
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
            Create
          </Button>
          <Button variant='contained' color='secondary' onClick={close}>
            Cancel
          </Button>
        </form>
      </ConfirmAction>
    </div>
  );
};

export default CreateSetting;
