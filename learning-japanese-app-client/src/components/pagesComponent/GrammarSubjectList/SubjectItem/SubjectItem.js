import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const SubjectItem = ({
  item: { image, subject_name, tags, subject_id, subject_code },
}) => {
  return (
    <CSSTransition in={true} timeout={300} classNames='my-node'>
      <div className='col-md-4 col-sm-6 col-12 mb-3 text-center'>
        <Link to={`/grammar-lessons/${subject_id}`}>
          <img
            src={
              image ||
              "https://files.tofugu.com/series/2018-11-13-japanese-learning-resources/header-640x.jpg"
            }
            alt={subject_name}
            className='img-fluid mb-2 img-hover-border'
          />
        </Link>
        <h3>{subject_name}</h3>
        <p className='lead'>{subject_code}</p>
        {tags?.map((tag) => (
          <span key={tag} className='text-muted'>
            {tag},
          </span>
        ))}
      </div>
    </CSSTransition>
  );
};

export default SubjectItem;
