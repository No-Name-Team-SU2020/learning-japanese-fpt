import React, { Fragment, useEffect } from "react";
// import Achevements from "../../../components/pagesComponent/Achevements/Achevements";
import ImageSlider from "../../../components/ui/ImageSlider/ImageSlider";
import StudentMission from "../../../components/pagesComponent/StudentMisson";
// import StepsToPassSwp from "../../../components/pagesComponent/StepsToPassSwp/StepsToPassSwp";

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
      <StudentMission />
      <ImageSlider />
      {/* <StepsToPassSwp />
      <Achevements /> */}
    </Fragment>
  );
};

export default StudentHome;
