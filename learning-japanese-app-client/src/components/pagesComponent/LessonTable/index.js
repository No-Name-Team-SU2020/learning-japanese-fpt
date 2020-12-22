import React, { useState } from "react";
import {
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import ConfirmAction from "../../shared/ConfirmAction";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import { deleteLesson } from "../../../store/actions/admin";

const LessonTable = ({ lessonList, subjectId }) => {
  const history = useHistory();
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(0);
  const dispatch = useDispatch();

  function openModal(cId) {
    setOpenDeleteConfirm(true);
    setSelectedLesson(cId);
  }
  const closeModal = () => setOpenDeleteConfirm(false);

  const deleteLessonHandler = () => {
    dispatch(deleteLesson(selectedLesson));
    closeModal();
  };
  return (
    <div>
      <div className='d-flex align-items-cemter justify-content-between mb-3'>
        <h3>Lesson Table</h3>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push(`/manage-lesson/${subjectId}/create`)}
          className='bg-orange-imp'
        >
          New Lesson
        </Button>
      </div>
      <TableContainer className='shadow rounded'>
        <Table aria-label='lessons table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Lesson Name</TableCell>
              <TableCell>Lesson Content</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {lessonList.map((lesson) => (
              <TableRow key={lesson.lesson_id}>
                <TableCell component='th' scope='row'>
                  {lesson.lesson_id}
                </TableCell>
                <TableCell>{lesson.lesson_name}</TableCell>
                <TableCell>
                  {lesson.lesson_content.includes("(*)")
                    ? lesson.lesson_content
                        .split("(*)")
                        .slice(1)
                        .map((ct, id) => <p key={id}>(*) {ct}</p>)
                    : lesson.lesson_content}
                </TableCell>
                <TableCell>
                  <IconButton
                    onClick={() =>
                      history.push(
                        `/manage-lesson/${subjectId}/edit/${lesson.lesson_id}`
                      )
                    }
                  >
                    <EditIcon color='primary' />
                  </IconButton>
                  <IconButton onClick={() => openModal(lesson.lesson_id)}>
                    <DeleteIcon color='secondary' />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <ConfirmAction open={openDeleteConfirm} close={closeModal}>
        <h5 className='mb-4'>Are you sure ? This can not be undone</h5>
        <Button
          variant='contained'
          color='secondary'
          className='mr-2'
          onClick={deleteLessonHandler}
        >
          Confirm
        </Button>
        <Button variant='contained' color='default' onClick={closeModal}>
          Cancel
        </Button>
      </ConfirmAction>
    </div>
  );
};

export default LessonTable;
