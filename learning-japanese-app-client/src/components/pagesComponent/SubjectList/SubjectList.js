import React, { useEffect, useState } from "react";
import SubjectItem from "./SubjectItem/SubjectItem";
// import { useSelector } from "react-redux";
import axios from "../../../store/api/axios";

const SubjectList = () => {
  // const { profile } = useSelector((state) => state.user);
  const [subjectData, setSubjectData] = useState({});
  useEffect(() => {
    axios
      .get(`/student/student-subjects`)
      .then((res) => {
        setSubjectData(res.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className='row'>
      {subjectData.subjects?.map((item) => (
        <SubjectItem key={item.subject_id} item={item} />
      ))}
    </div>
  );
};

export default SubjectList;
