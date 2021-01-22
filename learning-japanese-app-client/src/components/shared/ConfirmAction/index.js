import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

const ConfirmAction = ({ open, close, children }) => {
  return (
    <Modal
      className="modal-ui"
      open={open}
      onClose={close}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
      style={{
        display: "grid",
        placeItems: "center",
        padding: "0 15px",
      }}
    >
      <Fade in={open}>
        <Paper
          style={{
            maxWidth: "550px",
            minHeight: " 200px",
            margin: "auto",
            padding: "40px 30px",
          }}
        >
          {children}
        </Paper>
      </Fade>
    </Modal>
  );
};

export default ConfirmAction;
