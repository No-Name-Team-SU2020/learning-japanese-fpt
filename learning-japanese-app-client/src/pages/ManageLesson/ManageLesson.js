import React, { useEffect } from "react";
import { Route, useParams, Switch } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getLessons } from "../../store/actions/admin";
import Loader from "../../components/ui/Loader/Loader";
import LessonTable from "../../components/pagesComponent/LessonTable";
import CreateLessonForm from "../../components/formElement/CreateLesson";
import EditLessonForm from "../../components/formElement/EditLesson";

const ManageLesson = ({ match }) => {
  
  const { sId } = useParams();
  const { lessonList, loading, error } = useSelector(
    (state) => state.adminLessonList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLessons(sId));
  }, [dispatch, sId]);

  return (
    <div className='app-container'>
      {loading && <Loader />}
      {error && <div className='alert alert-danger'> {error} </div>}
      <Switch>
        <Route exact path={`${match.url}`}>
          {!loading && !error && (
            <LessonTable subjectId={sId} lessonList={lessonList} />
          )}
        </Route>
        <Route exact path={`${match.url}/create`}>
          <CreateLessonForm subjectId={sId} />
        </Route>
        <Route path={`${match.url}/edit/:lId`}>
          <EditLessonForm subjectId={sId} />
        </Route>
      </Switch>
    </div>
  );
};

export default ManageLesson;
