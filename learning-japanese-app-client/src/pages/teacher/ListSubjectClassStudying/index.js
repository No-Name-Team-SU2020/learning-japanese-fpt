import Paper from "@material-ui/core/Paper";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import Loader from "../../../components/ui/Loader/Loader";
import { getSubjectsByClass } from "../../../store/actions/teacher/subject";

const ListClassStudying = ({ isResult }) => {
  const { cId } =  useParams() ;
  const history = useHistory();
  const { subjects, loading, error } = useSelector(
    (state) => state.teacherSubject
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubjectsByClass(cId));
  }, [cId, dispatch]);

  return (
    <Paper className='p-3'>
      {loading && <Loader />}
      {error && <div className='alert alert-danger my-2'> {error} </div>}
      {subjects && (
        <div className='my-2 px-3'>
          <h3> Class {subjects?.class_name} </h3>
          <div>
            <p className='lead'> List Subject Class Studying</p>
            <ul className='list-group'>
              {subjects?.subjects?.map((s) => (
                <li
                  key={s.subject_id}
                  className='list-group-item cursor-pointer hover-bg-blue'
                  onClick={() =>
                    history.push(
                      isResult
                        ? `/manage-result/classes/${cId}?sId=${s.subject_id}`
                        : `/manage-student/classes/${cId}?sId=${s.subject_id}`
                    )
                  }
                >
                  <strong>{s.subject_code}</strong> - {s.subject_name}
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
