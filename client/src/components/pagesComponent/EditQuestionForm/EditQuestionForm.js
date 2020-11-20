import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { subjects, lessons } from '../../../temporary-data/data';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';

const EditQuestionForm = () => {
  const [question, setQuestion] = useState({
    title: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctAnswer: "",
    lesson: "js",
    subject: ""
  });
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  });
  const handleChange = (e) => {
    setQuestion(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(question);
  }
  return (
    <div className="bg-light p-4 rounded shadow">
      <h1 className="border-bottom pb-2 text-center">FPT EDUCATION</h1>
      <h3>Edit Question</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Subject :
            <TextField
              select
              value={question.subject}
              onChange={handleChange}
              name="subject"
              fullWidth
              helperText="Please select the subject"
              variant="outlined">
              {subjects.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4}>
            Lesson :
            <TextField
              select
              value={question.lesson}
              onChange={handleChange}
              name="lesson"
              fullWidth
              helperText="Please select the lesson"
              variant="outlined">
              {lessons.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4}>
            QuestionID : 1
          </Grid>
        </Grid>
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
          </Grid>
          <Grid item md={8}>
            <Button type="submit" variant="contained" color="primary" className="mr-3">
              Update
            </Button>
            <Button variant="contained" color="secondary" onClick={() => history.push('/')}>
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  )
}

export default EditQuestionForm;
