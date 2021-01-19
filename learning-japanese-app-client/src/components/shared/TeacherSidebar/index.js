import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
// import ClassIcon from "@material-ui/icons/Class";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import AssignmentIcon from "@material-ui/icons/Assignment";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getClassesByTeacher } from "../../../store/actions/teacher/class";
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
  const { loading, classes, error } = useSelector(
    (state) => state.teacherClass
  );
  const history = useHistory();
  const dispatch = useDispatch();
  const styles = useStyles();
  const [openResultList, setOpenResultList] = useState(false);
  const [openProgressList, setOpenProgressList] = useState(false);
  // const [openClassList, setOpenClassList] = useState(false);

  useEffect(() => {
    dispatch(getClassesByTeacher());
  }, [dispatch]);

  const handleResultClick = () => {
    setOpenResultList((prevState) => !prevState);
  };

  // const handleClassClick = () => {
  //   setOpenClassList((prevState) => !prevState);
  // };
  const handleProgressClick = () => {
    setOpenProgressList((prevState) => !prevState);
  };
  return (
    <div className='teacher-sidebar'>
      <List
        component='nav'
        subheader={
          <ListSubheader component='div' className='mb-3'>
            <h4>Teacher Dashboard</h4>
          </ListSubheader>
        }
        className={styles.root}
      >
        {/* <ListItem button onClick={handleClassClick}>
          <ListItemIcon>
            <ClassIcon />
          </ListItemIcon>
          <ListItemText primary='Class Management' />
          {openClassList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openClassList} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {loading && <Loader />}
            {!loading &&
              !error &&
              classes?.classes?.map((c) => (
                <ListItem
                  key={c.class_id}
                  button
                  className={styles.nested}
                  onClick={() => history.push(`/manage-subject/${c.class_id}`)}
                >
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText primary={c.class_name} />
                </ListItem>
              ))}
          </List>
        </Collapse> */}
        <ListItem button onClick={handleProgressClick}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary='Progress Management' />
          {openProgressList ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openProgressList} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            {loading && <Loader />}
            {!loading &&
              !error &&
              classes?.classes?.map((c) => (
                <ListItem
                  key={c.class_id}
                  button
                  className={styles.nested}
                  onClick={() => history.push(`/manage-progress/${c.class_id}`)}
                >
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText primary={c.class_name} />
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
            {loading && <Loader />}
            {!loading &&
              !error &&
              classes?.classes?.map((c) => (
                <ListItem
                  key={c.class_id}
                  button
                  className={styles.nested}
                  onClick={() => history.push(`/manage-result/${c.class_id}`)}
                >
                  <ListItemIcon>
                    <ArrowForwardIosIcon />
                  </ListItemIcon>
                  <ListItemText primary={c.class_name} />
                </ListItem>
              ))}
          </List>
        </Collapse>
      </List>
    </div>
  );
};

export default TeacherSidebar;
