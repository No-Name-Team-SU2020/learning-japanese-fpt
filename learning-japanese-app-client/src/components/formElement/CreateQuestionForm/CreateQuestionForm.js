import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import { useSelector, useDispatch } from "react-redux";
import { createQuestion } from "../../../store/actions/admin";
import { getSubjects } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";
import axios from "../../../store/api/axios";
import { containManySpaceCharacters } from "../../../utils/validators";
import { alert } from "../../../store/actions/ui/ui";

const CreateQuestionForm = () => {
  const { subjectList } = useSelector((state) => state.adminSubjectList);
  const { loading, error } = useSelector((state) => state.adminQuestionList);
  const [lessonList, setLessonList] = useState([]);
  const dispatch = useDispatch();

  const [question, setQuestion] = useState({
    question_content: "",
    option_a: "",
    option_b: "",
    option_c: "",
    option_d: "",
    correct_answer: "",
    lesson_id: "",
    subject_id: "",
  });

  useEffect(() => {
    if (subjectList.length === 0) {
      dispatch(getSubjects());
    }
  }, [subjectList.length, dispatch]);

  useEffect(() => {
    if (question.subject_id) {
      const fetchLessons = async () => {
        try {
          const res = await axios.get(
            `/shared/subjects/${question.subject_id}/lessons`
          );
          setLessonList(res.data.data);
        } catch (error) {
          alert("Error occurring when fetching lessons");
        }
      };
      fetchLessons();
    }
  }, [question.subject_id]);

  const handleChange = (e) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (
      containManySpaceCharacters(question.question_content) ||
      containManySpaceCharacters(question.option_a) ||
      containManySpaceCharacters(question.option_b) ||
      containManySpaceCharacters(question.option_c) ||
      containManySpaceCharacters(question.option_d) ||
      containManySpaceCharacters(question.correct_answer)
    ) {
      dispatch(
        alert("error", "Question Input fields should not contain many space")
      );
    } else {
      dispatch(
        createQuestion({
          ...question,
          question_content: question.question_content.trim(),
          option_a: question.option_a.trim(),
          option_b: question.option_b.trim(),
          option_c: question.option_c.trim(),
          option_d: question.option_d.trim(),
          correct_answer: question.correct_answer.trim(),
        })
      );
    }
  };
  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3>Create Question</h3>
      <form onSubmit={submitHandler}>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Question content:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Question content'
              variant='outlined'
              name='question_content'
              required
              fullWidth
              value={question.question_content}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option A:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Option A:'
              variant='outlined'
              name='option_a'
              required
              fullWidth
              value={question.option_a}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option B:
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Option B:'
              variant='outlined'
              name='option_b'
              required
              fullWidth
              value={question.option_b}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option C :
          </Grid>
          <Grid item md={8}>
            <TextField
              label=' Option C :'
              variant='outlined'
              name='option_c'
              required
              fullWidth
              value={question.option_c}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Option D :
          </Grid>
          <Grid item md={8}>
            <TextField
              label=' Option D :'
              variant='outlined'
              name='option_d'
              required
              fullWidth
              value={question.option_d}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item md={4}>
            Correct Answer :
          </Grid>
          <Grid item md={8}>
            <TextField
              label='Correct Answer :'
              variant='outlined'
              name='correct_answer'
              required
              fullWidth
              value={question.correct_answer}
              inputProps={{ maxLength: 500 }}
              onChange={handleChange}
            />
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
              name='subject_id'
              fullWidth
              required
              helperText='Please select the subject'
            >
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
              name='lesson_id'
              onChange={handleChange}
              helperText='Please select your currency'
              required
              fullWidth
            >
              {lessonList.map((option) => (
                <MenuItem key={option.lesson_id} value={option.lesson_id}>
                  {option.lesson_name}
                </MenuItem>
              ))}
            </TextField>
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
                window.location.href = "/";
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateQuestionForm;
