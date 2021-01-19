import React from "react";

const QuestionItem = ({ index, question, updateUserAnswers, listAnswers }) => {
  const optionName = `question-${question.question_id}`;
  const optionAIdentifier = `${question.question_id}--${question.option_a}`;
  const optionBIdentifier = `${question.question_id}--${question.option_b}`;
  const optionCIdentifier = `${question.question_id}--${question.option_c}`;
  const optionDIdentifier = `${question.question_id}--${question.option_d}`;

  const onUpdateAnswersHandler = (e) => {
    const splitAnswer = e.target.id.split("--");
    const ansId = +splitAnswer[0];
    const isAnswered = listAnswers.find((ans) => ans.question_id === ansId);
    if (!isAnswered) {
      updateUserAnswers((prevState) => [
        ...prevState,
        {
          question_id: ansId,
          answer: splitAnswer[1],
        },
      ]);
    } else {
      updateUserAnswers((prevState) =>
        prevState.map((item) =>
          item.question_id === ansId
            ? {
                question_id: ansId,
                answer: splitAnswer[1],
              }
            : item
        )
      );
    }
  };
  return (
    <div className='shadow p-3 rounded mb-3'>
      <p>
        {index + 1}. {question.question_content}
      </p>
      <ul>
        <li className='form-control-radio'>
          <input
            type='radio'
            name={optionName}
            id={optionAIdentifier}
            onChange={onUpdateAnswersHandler}
          />
          <label htmlFor={optionAIdentifier}> {question.option_a} </label>
        </li>
        <li className='form-control-radio'>
          <input
            type='radio'
            name={optionName}
            id={optionBIdentifier}
            onChange={onUpdateAnswersHandler}
          />
          <label htmlFor={optionBIdentifier}> {question.option_b} </label>
        </li>
        <li className='form-control-radio'>
          <input
            type='radio'
            name={optionName}
            id={optionCIdentifier}
            onChange={onUpdateAnswersHandler}
          />
          <label htmlFor={optionCIdentifier}> {question.option_c} </label>
        </li>
        <li className='form-control-radio'>
          <input
            type='radio'
            name={optionName}
            id={optionDIdentifier}
            onChange={onUpdateAnswersHandler}
          />
          <label htmlFor={optionDIdentifier}> {question.option_d} </label>
        </li>
      </ul>
    </div>
  );
};

export default QuestionItem;
