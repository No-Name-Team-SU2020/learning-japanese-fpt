import React from "react";
import ConfirmAction from "../ConfirmAction";
import Button from "@material-ui/core/Button";
import { useDispatch } from "react-redux";
import { authLogout } from "../../../store/actions/auth/auth";
import { clearProfile } from "../../../store/actions/user/user";

const LogoutModal = ({ closeModal, open }) => {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authLogout());
    dispatch(clearProfile());
  };
  return (
    <ConfirmAction open={open} close={closeModal}>
      <h5 className='mb-4'>Do you really want to logout ? </h5>
      <Button
        variant='contained'
        color='secondary'
        className='ml-4'
        onClick={logoutHandler}
      >
        Confirm
      </Button>
      <Button variant='contained' color='default' className='ml-4' onClick={closeModal}>
        Cancel
      </Button>
    </ConfirmAction>
  );
};

export default LogoutModal;
