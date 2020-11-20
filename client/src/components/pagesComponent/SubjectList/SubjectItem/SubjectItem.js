import React from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';

const SubjectItem = ({ item: { image, name, tags } }) => {
  return (
    <CSSTransition in={true} timeout={300} classNames="my-node">
      <div className="col-md-4 col-sm-6 col-12 mb-3 text-center" >
        <Link to="/subject/1">
          <img src={image} alt={name} className="img-fluid mb-2 img-hover-border" />
        </Link>
        <h3> {name} </h3>
        {
          tags.map(tag => <span key={tag} className="text-muted"> {tag}, </span>)
        }
      </div>
    </CSSTransition>
  )
}

export default SubjectItem;
