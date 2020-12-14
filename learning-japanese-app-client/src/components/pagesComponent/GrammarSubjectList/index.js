import React, { useEffect, useState } from "react";
import SubjectItem from "./SubjectItem/SubjectItem";
import axios from "../../../store/api/axios";
import Loader from "../../ui/Loader/Loader";

const GrammarSubjectList = () => {
  const [loading, setLoading] = useState(false);
  const [subjectData, setSubjectData] = useState({});
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/student/student-subjects`)
      .then((res) => {
        setSubjectData(res.data?.data[0]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);
  return (
    <div className='row'>
      {loading && <Loader />}
      {subjectData.subjects?.map((item) => (
        <SubjectItem key={item.subject_id} item={item} />
      ))}
    </div>
  );
};

export default GrammarSubjectList;
