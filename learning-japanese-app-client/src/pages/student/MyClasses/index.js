import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";

const MyClasses = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [classesData, setClassesData] = useState({});
  useEffect(() => {
    const fetchMyClasses = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/student/student-classes");
        setClassesData(res.data.data[0] || []);
        setLoading(false);
      } catch (error) {
        setError(error.response?.data?.message || "Something went wrong!!");
        setLoading(false);
      }
    };
    fetchMyClasses();
  }, []);

  return (
    <div>
      <h1>My Current Classes</h1>
      {loading && <Loader />}
      {error && <div className='alert mb-2 alert-danger'> {error} </div>}
      {classesData.classes &&
        classesData.classes.map((classItem) => (
          <div
            key={classItem.class_id}
            className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
          >
            <span className='cursor-pointer hover-text-blue'>
              <strong>
                Class {classItem.class_id} : {classItem.class_name}
              </strong>
            </span>
            <Link
              to={`/class-subject/${classItem.class_id}`}
              className='font-weight-bold'
            >
              View Subject
            </Link>
          </div>
        ))}
      <Link to='/' className='font-weight-bold'>
        &#8592; Go Back Home
      </Link>
    </div>
  );
};

export default MyClasses;
