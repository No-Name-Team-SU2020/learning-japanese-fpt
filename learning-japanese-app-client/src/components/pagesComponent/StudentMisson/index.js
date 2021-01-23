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
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAhYXmfwSbXGcmNJ4DIL3kkHEeoC-dL6ZRkQ&usqp=CAU'
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
          src='https://64.media.tumblr.com/49cdbc9a168cbaaad5449e6ab909e463/tumblr_pc34zatx6q1uv74o4_og_1280.jpg'
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
          src='https://files.tofugu.com/articles/japan/2017-05-02-omiyage/header-1280x.jpg'
          className='w-100'
          alt=''
        />
        <h3>Result</h3>
      </div>
      <div
        className='col-md-6 section'
        onClick={() => history.push("/my-classes")}
      >
        <img
          src='https://www.liveworkplayjapan.com/wp-content/uploads/2018/11/Kindergarten-in-Japan-FI-e1542239445343.jpg'
          className='w-100'
          alt=''
        />
        <h3>Attendance</h3>
      </div>
    </div>
  );
};

export default StudentMission;
