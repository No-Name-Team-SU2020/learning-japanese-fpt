import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import SubjectIcon from "@material-ui/icons/Subject";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMySubjects } from "../../../store/actions/teacher/subject";
import Loader from "../../ui/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const TeacherSidebar = () => {
  const { loading, subjects, error } = useSelector(
    (state) => state.teacherSubject
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const [openResultList, setOpenResultList] = useState(false);
  const [openSubjectList, setOpenSubjectList] = useState(false);

  useEffect(() => {
    dispatch(getMySubjects());
  }, [dispatch]);

  const handleResultClick = () => {
    setOpenResultList((prevState) => !prevState);
  };

  const handleSubjectClick = () => {
    setOpenSubjectList((prevState) => !prevState);
  };
  return (
    <List
      component='nav'
      subheader={
        <ListSubheader component='div' className='mb-3'>
          <h4>Teacher Dashboard</h4>
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button onClick={handleSubjectClick}>
        <ListItemIcon>
          <SubjectIcon />
        </ListItemIcon>
        <ListItemText primary='Subject Management' />
        {openSubjectList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openSubjectList} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          {loading && <Loader />}
          {!loading &&
            !error &&
            subjects.map((s) => (
              <ListItem
                key={s.subject_id}
                button
                className={classes.nested}
                onClick={() => history.push(`/manage-subject/${s.subject_id}`)}
              >
                <ListItemIcon>
                  <ArrowForwardIosIcon />
                </ListItemIcon>
                <ListItemText primary={s.subject_name} />
              </ListItem>
            ))}
        </List>
      </Collapse>
      <ListItem button onClick={handleResultClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary='Result Management' />
        {openResultList ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={openResultList} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <ArrowForwardIosIcon />
            </ListItemIcon>
            <ListItemText primary='Result 1' />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default TeacherSidebar;
