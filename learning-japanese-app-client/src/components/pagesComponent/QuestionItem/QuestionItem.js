import React from 'react';

const QuestionItem = ({ index, question, updateUserAnswers, listAnswers }) => {
  const optionName = `question-${question.id}`;
  const optionAIdentifier = `${question.id}-optionA`;
  const optionBIdentifier = `${question.id}-optionB`;
  const optionCIdentifier = `${question.id}-optionC`;
  const optionDIdentifier = `${question.id}-optionD`;

  const onUpdateAnswersHandler = e => {
    const splitAnswer = e.target.id.split('-');
    const ansId = splitAnswer[0];
    const isAnswered = listAnswers.find(ans => ans.id === ansId);
    if (!isAnswered)
    {
      updateUserAnswers(prevState => [...prevState, {
        id: ansId,
        userAnswer: splitAnswer[1]
      }]);
    } else
    {
      updateUserAnswers(prevState => prevState.map(item => item.id === ansId ? ({
        ...item,
        userAnswer: splitAnswer[1]
      }) : item));
    }
  }
  return (
    <div className="shadow p-3 rounded mb-3">
      <p> {index + 1}. {question.title} </p>
      <ul>
        <li className="form-control-radio">
          <input type="radio" name={optionName} id={optionAIdentifier} onChange={onUpdateAnswersHandler} />
          <label htmlFor={optionAIdentifier}> {question.optionA} </label>
        </li>
        <li className="form-control-radio">
          <input type="radio" name={optionName} id={optionBIdentifier} onChange={onUpdateAnswersHandler} />
          <label htmlFor={optionBIdentifier}> {question.optionB} </label>
        </li>
        <li className="form-control-radio">
          <input type="radio" name={optionName} id={optionCIdentifier} onChange={onUpdateAnswersHandler} />
          <label htmlFor={optionCIdentifier}> {question.optionC} </label>
        </li>
        <li className="form-control-radio">
          <input type="radio" name={optionName} id={optionDIdentifier} onChange={onUpdateAnswersHandler} />
          <label htmlFor={optionDIdentifier}> {question.optionD} </label>
        </li>
      </ul>
    </div>
  );
}

export default QuestionItem;
