import React from 'react';
import { elementaryList } from '../../../temporary-data/data';
import ElementaryItem from './ElementaryItem/ElementaryItem';

const ElementaryList = () => {
  return (
    <div className="row">
      {
        elementaryList.map(item => <ElementaryItem key={item.id} item={item} />)
      }
    </div>
  )
}

export default ElementaryList;
