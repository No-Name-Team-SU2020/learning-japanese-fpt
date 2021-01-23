import React, { Fragment, useState } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TablePagination,
  Button,
} from "@material-ui/core";
import ConfirmAction from "../../shared/ConfirmAction";
import QuestionItem from "./QuestionItem";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../../../store/actions/admin/index";

const QuestionTable = ({ questionList }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch();
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [selectedQuestion, setSelectionQuestion] = useState(0);

  const openModal = (qId) => {
    setOpenDeleteConfirm(true);
    setSelectionQuestion(qId);
  };
  const closeModal = () => setOpenDeleteConfirm(false);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setCurrentPage(0);
  };
  const handleDeleteQuestionHandler = () => {
    dispatch(deleteQuestion(selectedQuestion));
    closeModal();
  };
  return (
    <>
      {questionList?.length > 0 ? (
        <Fragment>
          <TableContainer className='shadow rounded'>
            <Table aria-label='questions table'>
              <TableHead>
                <TableRow>
                  <TableCell>ID</TableCell>
                  <TableCell style={{ width: "250px" }}>
                    QUESTION CONTENT
                  </TableCell>
                  <TableCell>OPTION A </TableCell>
                  <TableCell>OPTION B </TableCell>
                  <TableCell>OPTION C </TableCell>
                  <TableCell>OPTION D </TableCell>
                  <TableCell>CORRECT ANSWER </TableCell>
                  <TableCell>ACTION</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {questionList.map((question) => (
                  <QuestionItem
                    key={question.question_id}
                    question={question}
                    showConfirm={() => openModal(+question.question_id)}
                  />
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component='div'
            count={questionList.length}
            rowsPerPage={rowsPerPage}
            page={currentPage}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
          />
          <ConfirmAction open={openDeleteConfirm} close={closeModal}>
            <h5 className='mb-4'>Are you sure ? This can not be undone</h5>
            <Button
              variant='contained'
              color='secondary'
              className='ml-5'
              onClick={handleDeleteQuestionHandler}
            >
              Confirm
            </Button>
            <Button variant='contained' color='default' className='ml-5' onClick={closeModal}>
              Cancel
            </Button>
          </ConfirmAction>
        </Fragment>
      ) : (
        <p className='lead text-danger text-center my-3'>
          Question List Is Empty
        </p>
      )}
    </>
  );
};

export default QuestionTable;
