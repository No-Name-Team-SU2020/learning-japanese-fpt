import React from 'react';
import { Link } from 'react-router-dom';
import { lessonBySubjects } from '../../temporary-data/data';

const Subject = ({ match }) => {
  return (
    <div>
      <h1>Lesson follow by Subject</h1>
      {
        lessonBySubjects.map((lesson, index) =>
          <div key={lesson.id} className="shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded">
            <span>
              <strong>Topic {index + 1} :</strong> {lesson.name}
            </span>
            <Link to={`/quiz/${match.params.id}`} className="font-weight-bold">
              View Quiz
            </Link>
          </div>)
      }
    </div>
  )
}

export default Subject;
