import React, { Fragment } from 'react';
import Achevements from '../../components/pagesComponent/Achevements/Achevements';
import SubjectList from '../../components/pagesComponent/SubjectList/SubjectList';
import StepsToPassSwp from '../../components/pagesComponent/StepsToPassSwp/StepsToPassSwp';
import ImageSlider from '../../components/ui/ImageSlider/ImageSlider';

const StudentHome = () => {
  return (
    <Fragment>
      <h1 className="my-3"> Elementary Japanese 1.2 </h1>
      <SubjectList />
      <ImageSlider />
      <StepsToPassSwp />
      <Achevements />
    </Fragment>
  );
}

export default StudentHome;