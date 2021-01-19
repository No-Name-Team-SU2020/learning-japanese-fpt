import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "../../../store/api/axios";
import Loader from "../../ui/Loader/Loader";

const GrammarTable = ({ lessonId, activeGrammar }) => {
  const [loading, setLoading] = useState(false);
  const [grammarData, setGrammarData] = useState({});

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/shared/lessons/${lessonId}/grammars`)
      .then((res) => {
        setGrammarData(res.data.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [lessonId]);

  return (
    <ul className='list-group mt-3'>
      {loading && <Loader />}
      {grammarData?.grammars?.map((grm, index) => (
        <Link
          key={grm.grammar_id}
          to={`/grammar-detail/${grm.grammar_id}`}
          className={`list-group-item list-group-item-action ${
            activeGrammar && +activeGrammar === grm.grammar_id ? "active" : ""
          }`}
        >
          {index + 1}. {grm.vocabulary}
        </Link>
      ))}
    </ul>
  );
};

export default GrammarTable;
