import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { subjects, lessons } from '../../../temporary-data/data';

const CreateQuestionForm = () => {
  const history = useHistory();
  const [question, setQuestion] = useState({
    title: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    lesson: "js",
    subject: 'dm'
  })
  const handleChange = (e) => {
    setQuestion(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(question);
  }
  return (
    <div className="bg-light p-4 rounded shadow">
      <h1 className="border-bottom pb-2 text-center">FPT EDUCATION</h1>
      <h3>Create Question</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Question content:
        </Grid>
          <Grid item md={8}>
            <TextField label="Question content" variant="outlined" name="title"
              fullWidth value={question.title} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option A:
        </Grid>
          <Grid item md={8}>
            <TextField label="Option A:" variant="outlined" name="optionA"
              fullWidth value={question.optionA} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option B:
        </Grid>
          <Grid item md={8}>
            <TextField label="Option B:" variant="outlined" name="optionB"
              fullWidth value={question.optionB} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option C :
        </Grid>
          <Grid item md={8}>
            <TextField label=" Option C :" variant="outlined" name="optionC"
              fullWidth value={question.optionC} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option D :
        </Grid>
          <Grid item md={8}>
            <TextField label=" Option D :" variant="outlined" name="optionD"
              fullWidth value={question.optionD} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Correct Answer :
        </Grid>
          <Grid item md={8}>
            <TextField label="Correct Answer :" variant="outlined" name="correctAnswer"
              fullWidth value={question.correctAnswer} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Subject :
          </Grid>
          <Grid item md={8}>
            <TextField
              select
              value={question.subject}
              onChange={handleChange}
              name="subject"
              fullWidth
              helperText="Please select the subject">
              {subjects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Lesson :
          </Grid>
          <Grid item md={8}>
            <TextField
              id="standard-select-currency"
              select
              value={question.lesson}
              onChange={handleChange}
              helperText="Please select your currency"
              fullWidth>
              {lessons.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
          </Grid>
          <Grid item md={8}>
            <Button type="submit" variant="contained" color="primary" className="mr-3">
              Create
            </Button>
            <Button variant="contained" color="secondary" onClick={() => history.goBack()}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}

export default CreateQuestionForm;
