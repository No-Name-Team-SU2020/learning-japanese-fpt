import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateQuestion } from "../../../store/actions/admin";
import { getSingleQuestion } from "../../../store/actions/global";
import Loader from "../../ui/Loader/Loader";

const EditQuestionForm = () => {
  const { questionInfo, loading, error } = useSelector(
    (state) => state.singleQuestion
  );
  const dispatch = useDispatch();
  const { qId } = useParams();
  const history = useHistory();

  const [question, setQuestion] = useState({});
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 100,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    dispatch(getSingleQuestion(qId));
  }, [qId, dispatch]);

  useEffect(() => {
    if (questionInfo?.question && questionInfo?.subject) {
      setQuestion({
        ...questionInfo.question,
        subject_id: questionInfo.subject.subject_id,
      });
    }
  }, [questionInfo?.subject, questionInfo?.question]);

  const handleChange = (e) => {
    setQuestion((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateQuestion(qId, {
        ...question,
        question_content: question.question_content.trim(),
        option_a: question.option_a.trim(),
        option_b: question.option_b.trim(),
        option_c: question.option_c.trim(),
        option_d: question.option_d.trim(),
        correct_answer: question.correct_answer.trim(),
      })
    );
  };
  return (
    <div className='bg-light p-4 rounded shadow'>
      <h1 className='border-bottom pb-2 text-center'>FPT EDUCATION</h1>
      <h3>Edit Question</h3>
      {loading && <Loader />}
      {error && (
        <div className='alert alert-danger'>Something went wrong!!!</div>
      )}
      {!error && !loading && (
        <form onSubmit={submitHandler}>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Subject :
              <TextField
                defaultValue={questionInfo?.subject?.subject_id}
                name='subject_id'
                fullWidth
                disabled
                variant='outlined'
              />
            </Grid>
            <Grid item md={4}>
              Lesson :
              <TextField
                defaultValue={questionInfo?.question?.lesson_id}
                onChange={handleChange}
                name='lesson_id'
                fullWidth
                disabled
                variant='outlined'
              />
            </Grid>
            <Grid item md={4}>
              QuestionID :
              <TextField
                value={question.question_id ? question.question_id : ""}
                onChange={handleChange}
                name='question_id'
                fullWidth
                disabled
                variant='outlined'
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}>
              Question content:
            </Grid>
            <Grid item md={8}>
              <TextField
                variant='outlined'
                name='question_content'
                fullWidth
                value={question?.question_content}
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
                variant='outlined'
                name='option_a'
                fullWidth
                value={question?.option_a}
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
                variant='outlined'
                name='option_b'
                fullWidth
                value={question?.option_b}
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
                variant='outlined'
                name='option_c'
                fullWidth
                value={question?.option_c}
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
                variant='outlined'
                name='option_d'
                fullWidth
                value={question?.option_d}
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
                variant='outlined'
                name='correct_answer'
                fullWidth
                value={question?.correct_answer}
                inputProps={{ maxLength: 500 }}
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item md={4}></Grid>
            <Grid item md={8}>
              <Button
                type='submit'
                variant='contained'
                color='primary'
                className='mr-3 bg-orange-imp'
              >
                Update Question
              </Button>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => history.goBack()}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
    </div>
  );
};

export default EditQuestionForm;
