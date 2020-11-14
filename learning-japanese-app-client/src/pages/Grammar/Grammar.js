import React from 'react';
import { Button } from '@material-ui/core';
import { useHistory, Route } from 'react-router-dom';
import GrammarTable from '../../components/pagesComponent/GrammarTable/GrammarTable';
import GrammerDetail from '../../components/pagesComponent/GrammarDetail/GrammarDetail';

const Grammer = () => {
  const history = useHistory();
  return (
    <div>
      <h1> Japanese 121's Syllabus </h1>
      <h5 className="border-left-red-lg pl-2 my-4">My grammer</h5>
      <Route path="/grammar/:id" component={GrammerDetail} />
      <GrammarTable />
      <Button className="my-3" variant="contained" onClick={() => history.push('/grammar')}>
        Go Back
      </Button>
    </div>
  );
}

export default Grammer;
