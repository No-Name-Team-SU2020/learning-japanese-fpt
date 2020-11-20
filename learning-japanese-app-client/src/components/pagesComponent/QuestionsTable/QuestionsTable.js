import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TablePagination, IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useHistory } from 'react-router-dom';

const QuestionTable = ({ questionList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const history = useHistory();
  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
  };
  return (
    <>
      <TableContainer className="shadow rounded">
        <Table aria-label="questions table">
          <TableHead>
            <TableRow>
              <TableCell>Question ID</TableCell>
              <TableCell>QUESTION CONTENT	</TableCell>
              <TableCell>OPTION A	</TableCell>
              <TableCell>OPTION B	</TableCell>
              <TableCell>OPTION C	</TableCell>
              <TableCell>OPTION D	</TableCell>
              <TableCell>CORRECT ANSWER	</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {questionList.map((question) => (
              <TableRow key={question.question_id}>
                <TableCell component="th" scope="row">
                  { question.question_id }
                </TableCell>
                <TableCell>{question.question_content}</TableCell>
                <TableCell>{question.option_a}</TableCell>
                <TableCell>{question.option_b}</TableCell>
                <TableCell>{question.option_c}</TableCell>
                <TableCell>{question.option_d}</TableCell>
                <TableCell>{question.correct_answer}</TableCell>
                <TableCell>
                  <IconButton onClick={ () => history.push(`/manage-question/question/edit/${question.question_id}`) }>
                    <EditIcon /> 
                  </IconButton>
                  <IconButton> <DeleteIcon /> </IconButton>
                  <IconButton> <MoreHorizIcon /> </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={questionList.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}

export default QuestionTable;
