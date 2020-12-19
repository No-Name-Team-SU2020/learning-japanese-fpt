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
              "https://images.pexels.com/photos/5436925/pexels-photo-5436925.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
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
        {/* {loading && <Loader />}
      {error && <div className='alert mb-2 alert-danger'> {error} </div>}
      {classesData.classes &&
        classesData.classes.map((classItem) => (
          <div
            key={classItem.class_id}
            className='shadow-sm p-3 mb-3 d-flex align-items-center justify-content-between rounded'
          >
            <span className='cursor-pointer hover-text-blue'>
              <strong>
                Class {classItem.class_id} : {classItem.class_name}
              </strong>
            </span>
            <Link
              to={`/class-subject/${classItem.class_id}`}
              className='font-weight-bold'
            >
              View Subject
            </Link>
          </div>
        ))} */}
      </div>
    </CSSTransition>
  );
};

export default SubjectItem;
