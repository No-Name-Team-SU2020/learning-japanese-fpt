import React from "react";
import { useHistory } from "react-router-dom";

const StudentMission = () => {
  const history = useHistory();

  return (
    <div className='row student-mission'>
      <div
        className='col-md-6 section'
        onClick={() => history.push("/subject-list")}
      >
        <img
          src='https://images.pexels.com/photos/313690/pexels-photo-313690.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          alt=''
          className='w-100'
        />
        <h3>Subject</h3>
      </div>
      <div
        className='col-md-6 section'
        onClick={() => history.push("/grammar-subject-list")}
      >
        <img
          src='https://images.pexels.com/photos/5088008/pexels-photo-5088008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
          className='w-100'
          alt=''
        />
        <h3>Grammar</h3>
      </div>
      <div
        className='col-md-6 section'
        onClick={() => history.push("/result-subject-list")}
      >
        <img
          src='https://images.pexels.com/photos/256468/pexels-photo-256468.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          className='w-100'
          alt=''
        />
        <h3>Quiz Results</h3>
      </div>
      <div
        className='col-md-6 section'
        onClick={() => history.push("/my-classes")}
      >
        <img
          src='https://images.pexels.com/photos/5088022/pexels-photo-5088022.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
          className='w-100'
          alt=''
        />
        <h3>Attendance</h3>
      </div>
    </div>
  );
};

export default StudentMission;
