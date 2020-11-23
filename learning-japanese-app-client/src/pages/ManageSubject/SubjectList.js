import React from 'react';
import { IconButton, List, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const SubjectList = ( { subjects } ) => {
  return (
    <div className="shadow-sm">
      <List>
      {subjects.map((subject) => {
        const labelId = `subject-list-item-${subject.subject_id}`;
        return (
          <ListItem key={subject.subject_id} role={undefined} dense button style={{ marginBottom: '15px', padding: '8px' }} >
            <ListItemText id={labelId} primary={`${subject.subject_id} : ${subject.subject_name}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="comments" color="secondary">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
    </div>
  );
}

export default SubjectList;
