import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import { useHistory } from "react-router-dom";

function a11yProps(index) {
  return {
    id: `admin-menu-${index}`,
    "aria-controls": `admin-menu-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    marginBottom: "15px",
  },
}));

function AdminMenu() {
  const history = useHistory();
  const classes = useStyles();
  const [value, setValue] = React.useState(
    localStorage.getItem("menuPosition")
      ? Number(localStorage.getItem("menuPosition"))
      : 3
  );
  const handleChange = (event, newValue) => {
    setValue(newValue);
    localStorage.setItem("menuPosition", newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Tabs value={value} onChange={handleChange} aria-label='Admin Menu Top'>
          <Tab
            label='Class'
            {...a11yProps(0)}
            onClick={() => history.push("/manage-class")}
          />
          <Tab
            label='Subject'
            {...a11yProps(1)}
            onClick={() => history.push("/manage-subject")}
          />
          <Tab
            label='Quesion'
            {...a11yProps(2)}
            onClick={() => history.push("/")}
          />
          <Tab
            label='Quiz'
            {...a11yProps(3)}
            onClick={() => history.push("/manage-quiz")}
          />
        </Tabs>
      </AppBar>
    </div>
  );
}

export default AdminMenu;