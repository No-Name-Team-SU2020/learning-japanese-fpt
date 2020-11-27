import React from "react";
import { Route } from "react-router-dom";
import CreateClassForm from "../../components/formElement/CreateClass";
import EditClassForm from "../../components/formElement/EditClass";
import ClassTable from "../../components/pagesComponent/ClassTable";

const ManageClass = ({ match }) => {
  return (
    <div className='app-container my-2'>
      <h1>Class Management</h1>
      <Route exact path={`${match.url}`}>
        <ClassTable />
      </Route>
      <Route path={`${match.url}/edit/:cId`}>
        <EditClassForm />
      </Route>
      <Route exact path={`${match.url}/create`}>
        <CreateClassForm />
      </Route>
    </div>
  );
};

export default ManageClass;
