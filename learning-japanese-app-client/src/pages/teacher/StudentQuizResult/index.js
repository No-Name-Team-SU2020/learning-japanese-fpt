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
import { useHistory, Link } from "react-router-dom";

const StudentQuizResult = ({ match }) => {
  const history = useHistory();
  const { sId } = match.params;
  const [loading, setLoading] = useState(false);
  const [studentQuizResultData, setStudentQuizResultData] = useState([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/teacher/quiz-results/${sId}`)
      .then((res) => {
        setLoading(false);
        if (res.data.data) {
          setStudentQuizResultData(res.data.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Something went wrong");
      });
  }, [sId]);
  return (
    <div>
      {loading && <Loader />}
      {!loading && studentQuizResultData?.length > 0 && (
        <>
          <h3>{studentQuizResultData?.class_name}</h3>
          <TableContainer className="shadow rounded">
            <Table aria-label="lessons table">
              <TableHead>
                <TableRow>
                  <TableCell>Quiz ID</TableCell>
                  <TableCell>Lesson ID</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Num Of Failed</TableCell>
                  <TableCell>Attendance Status</TableCell>
                  <TableCell>Quiz Detail</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {studentQuizResultData?.map((result) => (
                  <TableRow key={result.quiz_id}>
                    <TableCell component="th" scope="row">
                      {result.quiz_id}
                    </TableCell>
                    <TableCell>{result.lesson_id}</TableCell>
                    <TableCell>{result.score}</TableCell>
                    <TableCell>
                      {result.percentage > 0
                        ? `${
                            Math.round(
                              result.score / (result.percentage / 100)
                            ) - result.score
                          }/${Math.round(
                            result.score / (result.percentage / 100)
                          )}`
                        : `0/10`}
                    </TableCell>
                    <TableCell>
                      <Link to={`/quiz-detail/${result.quiz_id}`}>View</Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
      <Button
        variant="contained"
        onClick={() => history.goBack()}
        className="mt-3"
      >
        Go Back
      </Button>
    </div>
  );
};

export default StudentQuizResult;
