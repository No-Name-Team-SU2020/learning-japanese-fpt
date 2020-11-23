import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuestion } from '../../../store/actions/admin';

const EditQuestionForm = ( ) => {
  const { subjectList } = useSelector(state => state.adminSubjectList);
  const { questionList } = useSelector(state => state.adminQuestionList);
  const { lessonList } = useSelector(state => state.adminLessonList);
  const dispatch = useDispatch();
  const { qId } = useParams();
  const [question, setQuestion] = useState({
    question_id: "",
    question_content: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_answer: "",
    lesson_id: "",
    subject_id: ""
  });
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: 'smooth'
    });
  }, []);
  useEffect(() => {
    const editedQuestion = questionList.find(q => q.question_id === Number(qId));
    setQuestion({
      ...editedQuestion,
      lesson_id: "",
      subject_id: ""
    });
  }, [questionList, qId]);
  const handleChange = (e) => {
    setQuestion(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(question);
    dispatch(updateQuestion(qId, question));
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
              value={question.subject_id}
              onChange={handleChange}
              name="subject_id"
              fullWidth
              helperText="Please select the subject"
              variant="outlined">
              {subjectList.map((option) => (
                <MenuItem key={option.subject_id} value={option.subject_id}>
                  {option.subject_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4}>
            Lesson :
            <TextField
              select
              value={question.lesson_id}
              onChange={handleChange}
              name="lesson_id"
              fullWidth
              helperText="Please select the lesson_id"
              variant="outlined">
              {lessonList.map((option) => (
                <MenuItem key={option.lesson_id} value={option.lesson_id}>
                  {option.lesson_name}
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
            <TextField label="Question content" variant="outlined" name="question_content"
              fullWidth value={question.question_content} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option A:
          </Grid>
          <Grid item md={8}>
            <TextField label="Option A:" variant="outlined" name="option_a"
              fullWidth value={question.option_a} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option B:
        </Grid>
          <Grid item md={8}>
            <TextField label="Option B:" variant="outlined" name="option_b"
              fullWidth value={question.option_b} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option C :
        </Grid>
          <Grid item md={8}>
            <TextField label=" Option C :" variant="outlined" name="option_c"
              fullWidth value={question.option_c} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option D :
        </Grid>
          <Grid item md={8}>
            <TextField label=" Option D :" variant="outlined" name="option_d"
              fullWidth value={question.option_d} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Correct Answer :
        </Grid>
          <Grid item md={8}>
            <TextField label="Correct Answer :" variant="outlined" name="correct_answer"
              fullWidth value={question.correct_answer} onChange={handleChange} />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
          </Grid>
          <Grid item md={8}>
            <Button type="submit" variant="contained" color="primary" className="mr-3">
              Update Question
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

export default EditQuestionForm;
