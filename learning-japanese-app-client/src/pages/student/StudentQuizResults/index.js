import React, { useEffect, useState } from "react";
import axios from "../../../store/api/axios";
import Button from '@material-ui/core/Button';
import Loader from "../../../components/ui/Loader/Loader";
import classes from "./index.module.css";
import { useHistory } from 'react-router-dom';

const StudentQuizResults = () => {
  const history = useHistory();
  const [quizResult, setQuizResult] = useState({
    loading: false,
    error: null,
    data: [],
  });

  useEffect(() => {
    const fetchResults = async () => {
      setQuizResult((prevState) => ({
        ...prevState,
        loading: true,
      }));
      try {
        const res = await axios.get(`/student/quiz_results`);
        setQuizResult({
          loading: false,
          error: null,
          data: res.data.data,
        });
      } catch (error) {
        setQuizResult({
          loading: false,
          error: error,
          data: [],
        });
      }
    };
    fetchResults();
  }, []);
  
  return (
    <div>
      <h1>My Quiz Results</h1>
      {quizResult.loading && <Loader />}
      {quizResult.error && <h3>Something wrong!!!</h3>}
      <div>
        {!quizResult.loading &&
          !quizResult.error &&
          quizResult.data.map((r) => (
            <div key={r.quiz_id} className={classes.ResultItem}>
              <h3>Quiz {r.quiz_id}</h3>
              <p>Score: {r.score}</p>
              <div
                className={[
                  classes.Badge,
                  r.percentage > 50 ? classes.Success : classes.Danger,
                ].join(' ')}
              >
                {r.percentage.toFixed(2)} %
              </div>
            </div>
          ))}
      </div>
      <Button variant="contained" color="primary" onClick={ () => history.push('/')}>
        Continue Solve Quiz
      </Button>
    </div>
  );
};

export default StudentQuizResults;
