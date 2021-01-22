import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../../components/ui/Loader/Loader";
import { getSubjects } from "../../../store/actions/admin";

const SubjectList = () => {
  const dispatch = useDispatch();
  const { loading, subjectList } = useSelector(
    (state) => state.adminSubjectList
  );
  useEffect(() => {
    if (subjectList.length === 0) {
      dispatch(getSubjects());
    }
  }, [dispatch, subjectList.length]);
  return (
    <div className='mx-auto w-75 pt-2'>
      {loading && <Loader />}
      {subjectList.length &&
        subjectList.map((subject) => (
          <div key={subject.subject_id} className='shadow p-3 mt-3 rounded'>
            <a
              href={`/grammar-list/${subject.subject_id}`}
              className='font-weight-bold'
              onClick={() => localStorage.removeItem("grammarLesson")}
            >
              {subject.subject_name}
            </a>
          </div>
        ))}
    </div>
  );
};

export default SubjectList;
