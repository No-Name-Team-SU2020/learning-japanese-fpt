import React, { Fragment, useEffect } from "react";
import Achevements from "../../../components/pagesComponent/Achevements/Achevements";
import StepsToPassSwp from "../../../components/pagesComponent/StepsToPassSwp/StepsToPassSwp";
import ImageSlider from "../../../components/ui/ImageSlider/ImageSlider";
import StudentMission from "../../../components/pagesComponent/StudentMisson";

const StudentHome = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <Fragment>
      <h1 className='my-3'> Elementary Japanese 1.2 </h1>
      <StudentMission />
      <ImageSlider />
      <StepsToPassSwp />
      <Achevements />
    </Fragment>
  );
};

export default StudentHome;
