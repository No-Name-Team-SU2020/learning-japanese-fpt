import React,  { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import SubjectIcon from '@material-ui/icons/Subject';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const TeacherSidebar = () => {
  const history = useHistory();
  const classes = useStyles();
  const [openResultList, setOpenResultList] = useState(false);
  const [openSubjectList, setOpenSubjectList] = useState(false);

  const handleResultClick = () => {
    setOpenResultList(prevState => !prevState);
  };

  const handleSubjectClick = () => {
    setOpenSubjectList(prevState => !prevState);
  };

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div" className="mb-3">
          <h4>Teacher Dashboard</h4>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleSubjectClick}>
        <ListItemIcon>
          <SubjectIcon />
        </ListItemIcon>
        <ListItemText primary="Subject Management" />
        {openSubjectList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSubjectList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested} onClick={ () => history.push('/manage-subject/1') }>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Subject 1" />
          </ListItem>
        </List>
      </Collapse>
      <ListItem button onClick={handleResultClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Result Management" />
        {openResultList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openResultList} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary="Result 1" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}

export default TeacherSidebar;