import React, { useState } from "react";
import { Button, Grid, MenuItem, TextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import SearchResult from "./SearchResult";
import { useDispatch } from "react-redux";
import { findQuestion } from "../../../store/actions/admin";

const FilterQuestionEngine = ({
  subject,
  lesson,
  changeLesson,
  changeSubject,
  lessons,
  subjects,
}) => {
  const [questionTitle, setQuestionTitle] = useState("");
  const dispatch = useDispatch();
  // const [showResult, setShowResult] = useState(questionTitle.length > 0);

  const findQuestionHandler = () => {
    dispatch(findQuestion(questionTitle));
  };

  return (
    <div className='d-block my-3'>
      <form style={{ flex: 1 }}>
        <Grid container spacing={3} className='align-items-center'>
          <Grid item md={3}>
            <p className='mb-2'>Subject :</p>
            <TextField
              select
              value={subject}
              onChange={(e) => {
                changeSubject(e.target.value);
                localStorage.setItem('subject', e.target.value);
              }}
              fullWidth
              variant='outlined'
            >
              {subjects?.map((option) => (
                <MenuItem key={option.subject_id} value={option.subject_id}>
                  {option.subject_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={3}>
            <p className='mb-2'>Lesson :</p>
            <TextField
              select
              value={lesson}
              onChange={(e) => {
                changeLesson(e.target.value);
                localStorage.setItem('lesson', e.target.value);
              }}
              fullWidth
              variant='outlined'
            >
              {lessons?.map((option) => (
                <MenuItem key={option.lesson_id} value={option.lesson_id}>
                  {option.lesson_name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item md={4} style={{ position: "relative" }}>
            <p className='mb-2'>Question title :</p>
            <TextField
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              fullWidth
              variant='outlined'
            />
            <SearchResult />
          </Grid>
          <Grid item md={2}>
            <Button
              onClick={findQuestionHandler}
              variant='contained'
              size='large'
              color='primary'
              type="button"
            >
              <SearchIcon /> Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default FilterQuestionEngine;
