import React from 'react';

const ElementaryItem = ({ item: { image, name, tags } }) => {
  return (
    <div className="col-md-4 col-sm-6 col-12 mb-3 text-center">
      <img src={image} alt={name} className="img-fluid mb-2 img-hover-border" />
      <h3> {name} </h3>
      {
        tags.map(tag => <span key={tag} className="text-muted"> {tag}, </span>)
      }
    </div>
  )
}

export default ElementaryItem;
