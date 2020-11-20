import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { createQuestion } from '../../../store/actions/admin';
import Loader from '../../ui/Loader/Loader';

const CreateQuestionForm = () => {
  const history = useHistory();
  const { subjectList } = useSelector(state => state.adminSubjectList);
  const { lessonList } = useSelector(state => state.adminLessonList);
  const {loading, error} = useSelector(state => state.adminQuestionList);
  const dispatch = useDispatch();

  const [question, setQuestion] = useState({
    question_content: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_answer: "",
    lesson_id: "",
    subject_id: ""
  });

  const handleChange = (e) => {
    setQuestion(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  const submitHandler = e => {
    e.preventDefault();
    dispatch(createQuestion(question));
  }
  return (
    <div className="bg-light p-4 rounded shadow">
      <h1 className="border-bottom pb-2 text-center">FPT EDUCATION</h1>
      {
        loading && <Loader />
      }
      {
        error && <div className="alert alert-danger" role="alert"> {error} </div>
      }
      <h3>Create Question</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Question content:
          </Grid>
          <Grid item md={8}>
            <TextField label="Question content" variant="outlined" name="question_content" required
              fullWidth value={question.question_content} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option A:
          </Grid>
          <Grid item md={8}>
            <TextField label="Option A:" variant="outlined" name="option_a" required
              fullWidth value={question.option_a} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option B:
          </Grid>
          <Grid item md={8}>
            <TextField label="Option B:" variant="outlined" name="option_b" required
              fullWidth value={question.option_b} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option C :
          </Grid>
          <Grid item md={8}>
            <TextField label=" Option C :" variant="outlined" name="option_c" required
              fullWidth value={question.option_c} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option D :
        </Grid>
          <Grid item md={8}>
            <TextField label=" Option D :" variant="outlined" name="option_d" required
              fullWidth value={question.option_d} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Correct Answer :
        </Grid>
          <Grid item md={8}>
            <TextField label="Correct Answer :" variant="outlined" name="correct_answer" required
              fullWidth value={question.correct_answer} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Subject :
          </Grid>
          <Grid item md={8}>
            <TextField
              select
              value={question.subject_id}
              onChange={handleChange}
              name="subject_id"
              fullWidth
              required
              helperText="Please select the subject">
              {subjectList.map((option) => (
                <MenuItem key={option.subject_id} value={option.subject_id}>
                  {option.subject_name}
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
              select
              value={question.lesson_id}
              name="lesson_id"
              onChange={handleChange}
              helperText="Please select your currency"
              required
              fullWidth>
              {lessonList.map((option) => (
                <MenuItem key={option.lesson_id} value={option.lesson_id}>
                  {option.lesson_name}
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
