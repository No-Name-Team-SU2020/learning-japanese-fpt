import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Loader from "../../../components/ui/Loader/Loader";
import { getClassesBySubject } from "../../../store/actions/teacher/class";

const ListClassStudying = ({ match }) => {
  const { sId } = match.params;
  const history = useHistory();
  const { classes, loading, error } = useSelector(
    (state) => state.teacherClass
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClassesBySubject(sId));
  }, [sId, dispatch]);

  return (
    <Paper className='p-3'>
      {loading && <Loader />}
      {error && <div className='alert alert-danger my-2'> {error} </div>}
      {classes[0] && (
        <div className='my-2 px-3'>
          <h3>
            {classes[0]?.subject_name} - {classes[0]?.subject_code}
          </h3>
          <div>
            <p className='lead'> List Class Studying</p>
            <ul className='list-group'>
              {classes[0]?.classes.map((c) => (
                <li
                  key={c.class_id}
                  className='list-group-item cursor-pointer hover-bg-blue'
                  onClick={() => history.push(`/manage-student/classes/${c.class_id}`)}
                >
                  Class {c.class_name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Paper>
  );
};

export default ListClassStudying;
