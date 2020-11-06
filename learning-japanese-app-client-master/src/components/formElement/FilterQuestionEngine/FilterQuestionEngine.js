import React, { useState } from 'react';
import { Button, Grid, MenuItem, TextField } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useHistory } from 'react-router-dom';
import { subjects, lessons } from '../../../temporary-data/data';
import SearchIcon from '@material-ui/icons/Search';

const FilterQuestionEngine = () => {
  const history = useHistory();
  const [filterTerms, setFilterTerms] = useState({
    subject: '',
    lesson: '',
    questionTitle: ''
  });
  const submitHandler = e => {
    e.preventDefault();
  }
  const handleChange = e => {
    setFilterTerms(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  return (
    <div className="d-block d-md-flex align-items-center justify-content-between my-3">
      <form style={{ flex: 1 }} onSubmit={submitHandler}>
        <Grid container spacing={3} className="align-items-center">
          <Grid item md={3}>
            <p className="mb-2">Subject :</p>
            <TextField
              select
              value={filterTerms.subject}
              onChange={handleChange}
              name="subject"
              fullWidth
              variant="outlined">
              {subjects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={3}>
            <p className="mb-2">Lesson :</p>
            <TextField
              select
              value={filterTerms.lesson}
              onChange={handleChange}
              name="lesson"
              fullWidth
              variant="outlined">
              {lessons.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={3}>
            <p className="mb-2">Question title :</p>
            <TextField
              value={filterTerms.questionTitle}
              onChange={handleChange}
              name="questionTitle"
              fullWidth
              variant="outlined" />
          </Grid>
          <Grid item md={3}>
            <Button size="large" variant="contained" color="secondary"> <SearchIcon /> Search </Button>
          </Grid>
        </Grid>
      </form>
      <Button variant="contained" color="primary" onClick={() => history.push('/question-management')}>
        <AddIcon /> Create Question
      </Button>
    </div>
  );
}

export default FilterQuestionEngine;
