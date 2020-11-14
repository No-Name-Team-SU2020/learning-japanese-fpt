import React from 'react';
import { subjectList } from '../../../temporary-data/data';
import SubjectItem from './SubjectItem/SubjectItem';

const SubjectList = () => {
  return (
    <div className="row">
      {
        subjectList.map(item => <SubjectItem key={item.id} item={item} />)
      }
    </div>
  )
}

export default SubjectList;
