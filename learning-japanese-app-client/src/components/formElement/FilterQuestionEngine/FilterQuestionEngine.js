import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import OptionMenu from './OptionMenu';

const FilterQuestionEngine = ( { subject, lesson, changeLesson, changeSubject, lessons, subjects} ) => {
  const [questionTitle, setQuestionTitle] = useState('');

  const submitHandler = e => {
    e.preventDefault();
  }

  return (
    <div className="d-block d-md-flex align-items-center justify-content-between my-3">
      <form style={{ flex: 1 }} onSubmit={submitHandler}>
        <Grid container spacing={3} className="align-items-center">
          <Grid item md={3}>
            <p className="mb-2">Subject :</p>
            <TextField
              select
              value={subject}
              onChange={e => changeSubject(e.target.value)}
              fullWidth
              variant="outlined">
              {subjects?.map((option) => (
                <MenuItem key={option.subject_id} value={option.subject_id}>
                  {option.subject_name}
                </MenuItem>
              ))
            }
            </TextField>
          </Grid>
          <Grid item md={3}>
            <p className="mb-2">Lesson :</p>
            <TextField
              select
              value={lesson}
              onChange={e => changeLesson(e.target.value)}
              fullWidth
              variant="outlined">
              {lessons?.map((option) => (
                <MenuItem key={option.lesson_id} value={option.lesson_id}>
                  {option.lesson_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={3}>
            <p className="mb-2">Question title :</p>
            <TextField
              value={questionTitle}
              onChange={e => setQuestionTitle(e.target.value)}
              fullWidth
              variant="outlined" />
          </Grid>
          <Grid item md={3}>
            <Button variant="contained" size="large" color="primary"> <SearchIcon /> Search </Button>
          </Grid>
        </Grid>
      </form>
      <OptionMenu />
    </div>
  );
}

export default FilterQuestionEngine;
