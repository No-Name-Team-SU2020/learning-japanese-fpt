import React, { Fragment, useEffect } from "react";
import Achevements from "../../../components/pagesComponent/Achevements/Achevements";
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
      <StudentMission />
      <ImageSlider />
    </Fragment>
  );
};

export default StudentHome;
