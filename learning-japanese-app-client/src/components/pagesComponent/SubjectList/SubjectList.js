import React, { useEffect, useState } from "react";
import SubjectItem from "./SubjectItem/SubjectItem";
import { useSelector } from "react-redux";
import axios from "../../../store/api/axios";

const SubjectList = () => {
  const { profile } = useSelector((state) => state.user);
  const [subjectList, setSubjectList] = useState([]);
  useEffect(() => {
    axios
      .get(`student/student-subjects/${profile.user_name}`)
      .then((res) => {
         setSubjectList(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [profile.user_name]);
  return (
    <div className='row'>
      {subjectList.map((item) => (
        <SubjectItem key={item.subject_id} item={item} />
      ))}
    </div>
  );
};

export default SubjectList;
