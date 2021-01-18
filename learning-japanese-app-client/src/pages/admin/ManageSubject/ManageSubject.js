import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import CreateSubjectForm from "../../../components/formElement/CreateSubject/CreateSubject";
import EditSubjectForm from "../../../components/formElement/EditSubject/EditSubject";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/ui/Loader/Loader";
import SubjectList from "./SubjectList";
import { getSubjects } from "../../../store/actions/admin";

const ManageSubject = ({ match }) => {
  const { loading, error, subjectList } = useSelector(
    (state) => state.adminSubjectList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (subjectList.length === 0) dispatch(getSubjects());
  }, [dispatch, subjectList.length]);

  return (
    <div className='app-container'>
      <Route exact path={match.url}>
        {loading && <Loader />}
        {error && <div className='alert alert-danger'> {error} </div>}
        {!error && !loading ? (
          <SubjectList url={match.url} subjects={subjectList} />
        ) : (
          <center className='text-danger'>
            No Subject To Show. Please load again or checking error
          </center>
        )}
      </Route>
      <Route exact path={`${match.url}/create`}>
        <CreateSubjectForm />
      </Route>
      <Route exact path={`${match.url}/subject/edit/:sId`}>
        <EditSubjectForm />
      </Route>
    </div>
  );
};

export default ManageSubject;
