import React from "react";
import { IconButton, TableCell, TableRow } from "@material-ui/core";
import { useHistory } from 'react-router-dom';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const QuestionItem = ({ question, showConfirm }) => {
  const history = useHistory();
  return (
    <TableRow>
      <TableCell component='th' scope='row'>
        {question.question_id}
      </TableCell>
      <TableCell>{question.question_content}</TableCell>
      <TableCell>{question.option_a}</TableCell>
      <TableCell>{question.option_b}</TableCell>
      <TableCell>{question.option_c}</TableCell>
      <TableCell>{question.option_d}</TableCell>
      <TableCell>{question.correct_answer}</TableCell>
      <TableCell>
        <IconButton 
          onClick={() =>
            history.push(
              `/manage-question/question/edit/${question.question_id}`
            )
          }
        >
          <EditIcon />
        </IconButton>
        <IconButton onClick={showConfirm}>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
};

export default QuestionItem;
