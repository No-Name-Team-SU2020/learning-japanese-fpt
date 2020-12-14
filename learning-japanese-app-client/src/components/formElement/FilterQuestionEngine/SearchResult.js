import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../../ui/Loader/Loader';
import {
  IconButton,
  List,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom';

const SearchResult = () => {
  const { loading, error, findedQuestion } = useSelector(state => state.findQuestion);
  const history = useHistory();

  return (
    <div className={`search-result ${findedQuestion && 'show' }`}>
      {
        loading && <Loader />
      }
      {
        error && <div className="alert alert-danger"> { error } </div>
      }
      {
        !loading && !error ? <List>
        {findedQuestion?.map((question) => {
          const labelId = `question-list-item-${question.question_id}`;
          return (
            <ListItem
              key={question.question_id}
              role={undefined}
              dense
              button
              style={{ marginBottom: "15px", padding: "8px" }}
              onClick={() => history.push(`/manage-question/question/edit/${question.question_id}`)}
            >
              <ListItemText
                id={labelId}
                primary={`${question.question_id} : ${question.question_content}`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge='end'>
                  <ArrowForwardIosIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List> : <center className="text-danger">Can not find question</center>
      }
    </div>
  )
}

export default SearchResult;
