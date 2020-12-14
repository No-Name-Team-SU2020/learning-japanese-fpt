import React, { useEffect } from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";

const TimeCountDown = ({ seconds, countDown }) => {
  const minutes = Math.floor(seconds / 60);
  const scnds = seconds - minutes * 60;

  useEffect(() => {
    let timer;
    if (seconds > 0) {
      timer = setTimeout(() => {
        countDown((prevScnds) => prevScnds - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [countDown, seconds]);
  return (
    <div className='bg-success text-white rounded p-2 px-3'>
      <span>
        <AccessTimeIcon />
      </span>
      <span> {minutes > 10 ? minutes : `0${minutes}`} </span>:
      <span> {scnds > 10 ? scnds : `0${scnds}`} </span>
    </div>
  );
};

export default TimeCountDown;
