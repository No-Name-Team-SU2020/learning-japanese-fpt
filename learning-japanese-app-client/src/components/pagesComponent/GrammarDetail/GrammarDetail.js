import { Button } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import GrammarTable from "../GrammarTable/GrammarTable";
import axios from "../../../store/api/axios";
import Loader from "../../../components/ui/Loader/Loader";

const GrammerDetail = ({ match }) => {
  const { gId } = match.params;
  const history = useHistory();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [gId]);
  const [loading, setLoading] = useState(false);
  const [grammarDetailData, setGrammarDetailData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/student/grammars/${gId}`)
      .then((res) => {
        setGrammarDetailData(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [gId]);
  return (
    <div className='mb-3 p-3 border rounded'>
      {loading && <Loader />}
      {!loading && grammarDetailData.subject && (
        <>
          <h3>Grammar Detail</h3>
          <p className='border-left-red-lg pl-2 my-3 text-danger font-weight-bold'>
            {grammarDetailData.grammars.vocabulary}
          </p>
          <div className='description bg-light p-3'>
            <h5 className='text-underline d-inline'>Explain</h5>
            <p>{grammarDetailData.grammars.explain}</p>
            <h5 className='text-underline d-inline'>Example</h5>
            <p>{grammarDetailData.grammars.example}</p>
            <h5 className='text-underline d-inline'>Attention</h5>
            <p>{grammarDetailData.grammars.attention}</p>
            <p>Ví dụ: {grammarDetailData.grammars.example}</p>
          </div>
          <GrammarTable
            lessonId={grammarDetailData?.grammars?.lesson_id}
            activeGrammar={grammarDetailData?.grammars?.grammar_id}
          />
          <Button
            className='my-3'
            variant='contained'
            onClick={() => history.goBack()}
          >
            Go Back
          </Button>
        </>
      )}
    </div>
  );
};

export default GrammerDetail;
