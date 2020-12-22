import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Loader from "../../../components/ui/Loader/Loader";
import classes from "./index.module.css";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getResults } from "../../../store/actions/student/quiz";

const StudentQuizResults = () => {
  const history = useHistory();
  const { sId } = useParams();
  const dispatch = useDispatch();
  const { loading, error, data } = useSelector((state) => state.studentResult);

  useEffect(() => {
    if (sId) dispatch(getResults(sId));
  }, [dispatch, sId]);

  return (
    <div>
      <h1 className='mb-3'>
        Subject: {data[0]?.lesson?.subject?.subject_name}
      </h1>
      {loading && <Loader />}
      {error && <h3> {error || "Something wrong!!!"} </h3>}
      <div>
        {!loading &&
          !error &&
          data.map((r) => (
            <div key={r.quiz_id} className={classes.ResultItem}>
              <h3>{r.lesson.lesson_name}</h3>
              <p>Score: {r.score}</p>
              <div
                className={[
                  classes.Badge,
                  r.percentage > 50 ? classes.Success : classes.Danger,
                ].join(" ")}
              >
                {r.percentage.toFixed(2)} %
              </div>
            </div>
          ))}
      </div>
      <Button
        variant='contained'
        color='primary'
        onClick={() => history.push("/subject-list")}
      >
        Continue Solve Quiz
      </Button>
    </div>
  );
};

export default StudentQuizResults;
