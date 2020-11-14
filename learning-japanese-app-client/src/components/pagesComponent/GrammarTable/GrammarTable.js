import React from 'react';
import { Link } from 'react-router-dom';
import { grammars } from '../../../temporary-data/data';

const GrammarTable = () => {
  return (
    <ul className="list-group">
      {
        grammars.map((grm, index) => <Link key={grm.id} to={`/grammar/${grm.id}`}
          className="list-group-item list-group-item-action">
          {index + 1}. {grm.foreignLang} : {grm.vietnamese}
        </Link>)
      }
    </ul>
  );
}

export default GrammarTable;
