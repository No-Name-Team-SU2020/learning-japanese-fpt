import React, { Fragment } from 'react';
import Achevements from '../../components/pagesComponent/Achevements/Achevements';
import ElementaryList from '../../components/pagesComponent/ElementaryList/ElementaryList';
import StepsToPassSwp from '../../components/pagesComponent/StepsToPassSwp/StepsToPassSwp';
import Sidebar from '../../components/shared/Sidebar/Sidebar';
import ImageSlider from '../../components/ui/ImageSlider/ImageSlider';
import ToggleSidebar from '../../components/ui/ToggleSidebar/ToggleSidebar';
import JoinQuestion from '../JoinQuestion/JoinQuestion';

const Home = () => {
  return (
    <Fragment>
      <Sidebar />
      <div className="app-container">
        <main className="row">
          <div className="col-md-2"></div>
          <div className="col-md-10">
            <div className="d-block d-md-none"><ToggleSidebar /></div>
            <h1 className="my-3"> Elementary Japanese 1.2 </h1>
            <ElementaryList />
            <ImageSlider />
            <StepsToPassSwp />
            <Achevements />
            <JoinQuestion />
          </div>
        </main>
      </div>
    </Fragment>
  );
}

export default Home;
