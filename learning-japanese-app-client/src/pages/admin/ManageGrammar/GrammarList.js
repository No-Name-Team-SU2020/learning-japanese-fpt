import React, { useEffect, useState } from "react";
import { Button, MenuItem, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getLessons, getListGrammar } from "../../../store/actions/admin";
import { useHistory, useParams } from "react-router-dom";
import { Typography } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import GrammarTable from "./GrammarTable";
import Loader from "../../../components/ui/Loader/Loader";

const GrammarList = () => {
  const [lesson, setLesson] = useState(
    localStorage.getItem("grammarLesson") || ""
  );
  const { sId } = useParams();
  const history = useHistory();
  const { loading, lessonList } = useSelector((state) => state.adminLessonList);
  const grammar = useSelector((state) => state.grammar);
  const dispatch = useDispatch();
  useEffect(() => {
    if (sId) dispatch(getLessons(sId));
  }, [sId, dispatch]);
  useEffect(() => {
    if (lessonList[0] && !lesson) {
      setLesson(lessonList[0].lesson_id);
    }
  }, [lessonList.length, lessonList, lesson]);
  useEffect(() => {
    if (lesson) {
      dispatch(getListGrammar(lesson));
    }
  }, [lesson, dispatch]);
  return (
    <div className='app-container mt-3'>
      {loading ? (
        <Typography component='div' variant='h1'>
          <Skeleton />
        </Typography>
      ) : (
        <div className='d-flex align-items-center justify-content-between'>
          <TextField
            select
            value={lesson}
            onChange={(e) => {
              setLesson(e.target.value);
              localStorage.setItem("grammarLesson", e.target.value);
            }}
            fullWidth
            variant='outlined'
            className='max-width-200'
          >
            {lessonList?.map((option) => (
              <MenuItem key={option.lesson_id} value={option.lesson_id}>
                {option.lesson_name}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant='contained'
            className='bg-orange-imp'
            size='large'
            onClick={() => history.push(`/create-grammar/${lesson}`)}
          >
            New Grammar
          </Button>
        </div>
      )}
      {grammar.loading && <Loader />}
      {grammar.data.subject && (
        <>
          <div>
            <p className='lead font-weight-bold'>
              {grammar.data.subject.subject_name} -{" "}
              {grammar.data.lesson.lesson_name}
            </p>
          </div>
          <GrammarTable grammars={grammar.data.grammars} />
        </>
      )}
      <Button
        variant='contained'
        className='mt-3'
        color='default'
        onClick={() => {
          history.goBack();
          localStorage.removeItem("grammarLesson");
        }}
      >
        Go Back
      </Button>
    </div>
  );
};

export default GrammarList;
