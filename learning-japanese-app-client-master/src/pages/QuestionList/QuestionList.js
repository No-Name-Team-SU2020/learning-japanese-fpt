import React from 'react';
import FilterQuestionEngine from '../../components/formElement/FilterQuestionEngine/FilterQuestionEngine';
import QuestionTable from '../../components/pagesComponent/QuestionsTable/QuestionsTable';
import Loader from '../../components/ui/Loader/Loader';

const QuestionList = () => {
  return (
    <div className="app-container">
      <h1>Question List Table</h1>
      <Loader />
      <FilterQuestionEngine />
      <QuestionTable />
    </div>
  );
}

export default QuestionList;
