import React, { useEffect, useState } from "react";
import SubjectItem from "./SubjectItem/SubjectItem";
// import { useSelector } from "react-redux";
import axios from "../../../store/api/axios";
import Loader from "../../ui/Loader/Loader";

const SubjectList = () => {
  // const { profile } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);
  const [subjectData, setSubjectData] = useState({});
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/student/student-subjects`)
      .then((res) => {
        setSubjectData(res.data.data[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  
  return (
    <div className='row'>
      {
        loading && <Loader />
      }
      {subjectData.subjects?.map((item) => (
        <SubjectItem key={item.subject_id} item={item} />
      ))}
    </div>
  );
};

export default SubjectList;
