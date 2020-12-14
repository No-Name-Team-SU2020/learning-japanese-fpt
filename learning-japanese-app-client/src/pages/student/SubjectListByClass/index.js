import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";

const SubjectListByClass = ({ match }) => {
  const { cId } = match.params;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [subjectData, setSubjectData] = useState({});
  useEffect(() => {
    const fetchSubjectByClass = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/shared/class-subjects/" + cId);
        setSubjectData(res.data.data[0] || []);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || "Something went wrong!!");
        setLoading(false);
      }
    };
    fetchSubjectByClass();
  }, [cId]);

  return (
    <div>
      <h1>My Current Classes</h1>
      {loading && <Loader />}
      {error && <div className='alert mb-2 alert-danger'> {error} </div>}
      {subjectData.subjects &&
        subjectData.subjects.map((subjectItem) => (
          <div
            key={subjectItem.subject_id}
            className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
          >
            <span className='cursor-pointer hover-text-blue'>
              <strong>
                {subjectItem.subject_code} : {subjectItem.subject_name}
              </strong>
            </span>
            <Link
              to={`/attendance/${subjectItem.subject_id}`}
              className='font-weight-bold'
            >
              Attendance Status
            </Link>
          </div>
        ))}
      <Link to='/my-classes' className='font-weight-bold'>
        &#8592; Go Back
      </Link>
    </div>
  );
};

export default SubjectListByClass;
