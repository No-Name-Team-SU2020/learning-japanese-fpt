import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import GrammarTable from "../../../components/pagesComponent/GrammarTable/GrammarTable";
import axios from "../../../store/api/axios";
import Loader from "../../../components/ui/Loader/Loader";

const Grammer = ({ match }) => {
  const { lId } = match.params;
  const history = useHistory();
  const [loading, setLoading] = useState(false);
  const [grammarData, setGrammarData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/student/lessons/${lId}/grammars`)
      .then((res) => {
        setGrammarData(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [lId]);

  return (
    <div>
      {loading && <Loader />}
      {!loading && grammarData.subject && (
        <>
          <h1> {grammarData.subject} </h1>
          <p className='lead'> {grammarData.lesson} </p>
          <h5 className='border-left-red-lg pl-2 my-4'>My grammar</h5>
          <GrammarTable lessonId={lId} />
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

export default Grammer;
