import React, { useState, useEffect } from "react";
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
import { useSelector, useDispatch } from "react-redux";
import { deleteClass, getClasses } from "../../../store/actions/admin";
import Loader from "../../ui/Loader/Loader";

//Class table in menu
const ClassTable = () => {
  const history = useHistory();
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [selectedClass, setSelectedClass] = useState(0);
  const { loading, error, classList } = useSelector(
    (state) => state.adminClassList
  );
  const classLength = classList.length;
  const dispatch = useDispatch();

  useEffect(() => {
    if (classLength === 0) dispatch(getClasses());
  }, [dispatch, classLength]);

  function openModal(cId) {
    setOpenDeleteConfirm(true);
    setSelectedClass(cId);
  }
  const closeModal = () => setOpenDeleteConfirm(false);

  const deleteClassHandler = () => {
    dispatch(deleteClass(selectedClass));
    closeModal();
  };
  return (
    <div>
      <div className='d-flex align-items-cemter justify-content-between mb-3'>
        <h3>Class Table</h3>
        <Button
          variant='contained'
          color='primary'
          onClick={() => history.push("/manage-class/create")}
          className='bg-orange-imp'
        >
          New Class
        </Button>
      </div>
      {loading && <Loader />}
      {error && <div className='alert alert-danger'> {error} </div>}
      <TableContainer className='shadow rounded'>
        <Table aria-label='questions table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Class Name</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {classList.map((item) => (
              <TableRow key={item.class_id}>
                <TableCell component='th' scope='row'>
                  {item.class_id}
                </TableCell>
                <TableCell>{item.class_name}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() =>
                      history.push(`/manage-class/edit/${item.class_id}`)
                    }
                  >
                    <EditIcon color='primary' />
                  </IconButton>
                  <IconButton onClick={() => openModal(item.class_id)}>
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
          onClick={deleteClassHandler}
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

export default ClassTable;