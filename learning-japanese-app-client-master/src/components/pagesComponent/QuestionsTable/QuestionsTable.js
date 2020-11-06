import React, { useState } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableBody, TableCell, TablePagination, IconButton} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { tempQuestions } from '../../../temporary-data/data';

const QuestionTable = () => {
  const [questions] = useState(tempQuestions);
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
            {questions.map((question) => (
              <TableRow key={question.id}>
                <TableCell component="th" scope="row">
                  {question.id}
                </TableCell>
                <TableCell>{question.title}</TableCell>
                <TableCell>{question.optionA}</TableCell>
                <TableCell>{question.optionB}</TableCell>
                <TableCell>{question.optionC}</TableCell>
                <TableCell>{question.optionD}</TableCell>
                <TableCell>{question.correctAnswer}</TableCell>
                <TableCell>
                  <IconButton> <EditIcon /> </IconButton>
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
        count={questions.length}
        rowsPerPage={rowsPerPage}
        page={currentPage}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </>
  );
}

export default QuestionTable;
