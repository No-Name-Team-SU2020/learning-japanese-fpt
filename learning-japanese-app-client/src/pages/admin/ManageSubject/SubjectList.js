import React, { useState } from "react";
import {
  IconButton,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import PageviewIcon from "@material-ui/icons/Pageview";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSubject } from "../../../store/actions/admin";
import ConfirmAction from "../../../components/shared/ConfirmAction";

const SubjectList = ({ subjects, url }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState(0);

  function openModal(sId) {
    setOpenDeleteConfirm(true);
    setSelectedSubject(sId);
  }
  const closeModal = () => setOpenDeleteConfirm(false);

  const deleteSubjectHandler = () => {
    dispatch(deleteSubject(selectedSubject));
    closeModal();
  };

  return (
    <div className='shadow-sm'>
      <div className='d-flex align-items-center justify-content-between'>
        <h1 className='mb-3'>Subject List</h1>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push(`/manage-subject/create`)}
        >
          New Subject
        </Button>
      </div>
      <TableContainer className='shadow rounded'>
        <Table aria-label='lessons table'>
          <TableHead>
            <TableRow>
              <TableCell>Subject Code</TableCell>
              <TableCell>Subject Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.subject_id}>
                <TableCell component='th' scope='row'>
                  {subject.subject_code}
                </TableCell>
                <TableCell>{subject.subject_name}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() =>
                      history.push(`/manage-lesson/${subject.subject_id}`)
                    }
                  >
                    <PageviewIcon />
                  </IconButton>
                  <IconButton
                    onClick={() =>
                      history.push(`${url}/subject/edit/${subject.subject_code}`)
                    }
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => openModal(subject.subject_id)}>
                    <DeleteIcon />
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
          onClick={deleteSubjectHandler}
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

export default SubjectList;
