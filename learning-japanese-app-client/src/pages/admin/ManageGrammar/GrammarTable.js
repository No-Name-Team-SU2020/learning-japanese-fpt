import React, { useState } from "react";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
  Button,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import ConfirmAction from "../../../components/shared/ConfirmAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteGrammar } from "../../../store/actions/admin";
import Loader from "../../../components/ui/Loader/Loader";

const GrammarTable = ({ grammars }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.adminLessonList);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const [selectedGrammar, setSelectedGrammar] = useState(0);
  const openModal = (gId) => {
    setOpenDeleteConfirm(true);
    setSelectedGrammar(gId);
  };
  const closeModal = () => setOpenDeleteConfirm(false);

  const deleteGrammarHandler = () => {
    dispatch(deleteGrammar(selectedGrammar));
    closeModal();
  };
  return grammars.length > 0 ? (
    <div>
      <TableContainer className='shadow rounded'>
        <Table aria-label='lessons table'>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Vocabulary</TableCell>
              <TableCell>Example</TableCell>
              <TableCell>Explain</TableCell>
              <TableCell>Attention</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {grammars.map((grammar) => (
              <TableRow key={grammar.grammar_id}>
                <TableCell component='th' scope='row'>
                  {grammar.grammar_id}
                </TableCell>
                <TableCell>{grammar.vocabulary}</TableCell>
                <TableCell>{grammar.example}</TableCell>
                <TableCell>{grammar.explain}</TableCell>
                <TableCell>{grammar.attention}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={() =>
                      history.push(`/edit-grammar/${grammar.grammar_id}`)
                    }
                  >
                    <EditIcon color='primary' />
                  </IconButton>
                  <IconButton onClick={() => openModal(grammar.grammar_id)}>
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
        {loading && <Loader />}
        <Button
          variant='contained'
          color='secondary'
          className='mr-2'
          onClick={deleteGrammarHandler}
        >
          Confirm
        </Button>
        <Button variant='contained' color='default' onClick={closeModal}>
          Cancel
        </Button>
      </ConfirmAction>
    </div>
  ) : (
    <p className='p text-danger text-center'>
      We have no grammars for this lesson
    </p>
  );
};

export default GrammarTable;
