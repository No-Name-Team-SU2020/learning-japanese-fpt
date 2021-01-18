import React, { useState, useEffect } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { alert } from "../../../store/actions/ui/ui";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const QuizDetail = () => {
  const history = useHistory();
  const { lId, sId } = useParams();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [quizDetailData, setQuizDetailData] = useState({});
  useEffect(() => {
    axios
      .get(`/teacher/lessons/${lId}/quiz-results/${sId}`)
      .then((res) => {
        setLoading(false);
        if (res.data.data && res.data.data.results) {
          setQuizDetailData(res.data.data.results);
        }
      })
      .catch((_) => {
        setLoading(false);
        dispatch(alert("error", "Something went wrong"));
      });
  }, [lId, sId, dispatch]);

  console.log(quizDetailData);

  return (
    <div>
      {loading && <Loader />}
      {!loading && quizDetailData.lesson && (
        <>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <h3>{quizDetailData.lesson.lesson_name}</h3>
              <p>{quizDetailData.lesson.lesson_content}</p>
            </div>
            <div>
              <h5>Score : {quizDetailData.score} </h5>
              <div
                className={[
                  "badge",
                  quizDetailData.percentage >= 50 ? "success" : "danger",
                ].join(" ")}
              >
                {quizDetailData.percentage} %
              </div>
            </div>
          </div>
          <div>
            <h3> {quizDetailData.student_id} answers</h3>
            <TableContainer className='shadow rounded'>
              <Table aria-label='lessons table'>
                <TableHead>
                  <TableRow>
                    <TableCell>Question ID</TableCell>
                    <TableCell>Question Content</TableCell>
                    <TableCell>Option A</TableCell>
                    <TableCell>Option B</TableCell>
                    <TableCell>Option C</TableCell>
                    <TableCell>Option D</TableCell>
                    <TableCell>Student Answer</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quizDetailData?.student_answer?.map((answer) => (
                    <TableRow key={answer.question_id}>
                      <TableCell component='th' scope='row'>
                        {answer.question_id}
                      </TableCell>
                      <TableCell style={{ width: "180px" }}>
                        {answer.question_content}
                      </TableCell>
                      <TableCell>{answer.option_a}</TableCell>
                      <TableCell>{answer.option_b}</TableCell>
                      <TableCell>{answer.option_c}</TableCell>
                      <TableCell>{answer.option_d}</TableCell>
                      <TableCell>{answer.answer}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </>
      )}
      <Button
        variant='contained'
        onClick={() => history.goBack()}
        className='mt-3'
      >
        Go Back
      </Button>
    </div>
  );
};

export default QuizDetail;