import React from "react";
import "./Sidebar.css";
import logo from "../../../assets/fpt_logo.png";
import Avatar from "@material-ui/core/Avatar";
import SidebarLinks from "./SidebarLinks/SidebarLinks";
import Backdrop from "../../ui/Backdrop/Backdrop";
import { useSelector, useDispatch } from "react-redux";
import { hideSidebar } from "../../../store/actions/ui/ui";
import ToggleSidebar from "../../ui/ToggleSidebar/ToggleSidebar";
import { useLocation } from "react-router-dom";

const Sidebar = () => {
  const { showSidebar } = useSelector((state) => state.ui);
  const { profile } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const location = useLocation();
  return (
    <>
      <aside
        className={[
          "text-center main-sidebar",
          location.pathname.includes("/quiz/") ? "divDisabled" : "",
          showSidebar ? "show" : "",
        ].join(" ")}
      >
        <div className='d-block d-md-none text-left mb-3'>
          <ToggleSidebar />
        </div>
        <img src={logo} alt='aside logo' />
        <Avatar
          className='mx-auto mt-4'
        />
        <h5> {profile.display_name} </h5>
        <p> {profile.email} </p>
        <SidebarLinks />
        <p
          className='small'
          style={{
            marginTop: "310px",
          }}
        >
          © 2020 FTP University by JLMS. All Rights Reserved.
        </p>
      </aside>
      <Backdrop show={showSidebar} clicked={() => dispatch(hideSidebar())} />
    </>
  );
};

export default Sidebar;
