import React from "react";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const SubjectItem = ({ item: { image, subject_name, tags, subject_id } }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames='my-node'>
      <div className='col-md-4 col-sm-6 col-12 mb-3 text-center'>
        <Link to={`/lesson/${subject_id}`}>
          <img
            src={
              image ||
              "https://images.pexels.com/photos/5436925/pexels-photo-5436925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            }
            alt={subject_name}
            className='img-fluid mb-2 img-hover-border'
          />
        </Link>
        <h3> {subject_name} </h3>
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
