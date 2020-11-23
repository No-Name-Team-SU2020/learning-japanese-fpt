import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CreateSubjectForm from "../../components/formElement/CreateSubject/CreateSubject";
import EditSubjectForm from "../../components/formElement/EditSubject/EditSubject";
import Grid from "@material-ui/core/Grid";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../../components/ui/Loader/Loader';
import SubjectList from "./SubjectList";
import { getSubjects } from "../../store/actions/admin";

const ManageSubject = ({ match }) => {
  const { loading, error, subjectList } = useSelector(state => state.adminSubjectList);
  const dispatch = useDispatch();

  useEffect(() => {
    if(subjectList.length === 0) dispatch(getSubjects());
  }, [dispatch, subjectList.length]);

  return (
    <div className='app-container'>
      <Grid container spacing={3}>
        <Grid item md={6}>
          {
            loading && <Loader />
          }
          {
            error && <div className="alert alert-danger"> { error } </div>
          }
          {
            subjectList.length > 0 ? <SubjectList subjects={subjectList} /> : 
            <center className="text-danger">No Subject To Show. Please load again or checking error</center>
          }
        </Grid>
        <Grid item md={6}>
          <Route exact path={`${match.url}`} >
            <CreateSubjectForm />
          </Route>
          <Route exact path={`${match.url}/subject/edit/:sId`}>
            <EditSubjectForm />
          </Route>
        </Grid>
      </Grid>
    </div>
  );
};

export default ManageSubject;
