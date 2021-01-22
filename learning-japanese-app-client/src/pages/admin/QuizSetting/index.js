import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getAllQuizPreset } from "../../../store/actions/admin";
import Loader from "../../../components/ui/Loader/Loader";
import SettingList from "./SettingList";
import CreateSetting from "./CreateSetting";

const QuizSetting = () => {
  const { data, loading } = useSelector((state) => state.quizPreset);
  const [openCreateSetting, setOpenCreateSetting] = useState(false);
  const closeCreateSettingHandler = () => setOpenCreateSetting(false);
  const openCreateSettingHandler = () => setOpenCreateSetting(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllQuizPreset());
  }, [dispatch]);
  return (
    <div className='app-container'>
      <div className='d-flex align-items-center justify-content-between my-3'>
        <h1>Setting For Quiz</h1>
        <Button
          variant='contained'
          color='primary'
          onClick={openCreateSettingHandler}
          className='bg-orange-imp'
        >
          New Setting
        </Button>
      </div>
      {loading && <Loader />}
      {data.length > 0 && <SettingList settings={data} />}
      <CreateSetting
        show={openCreateSetting}
        close={closeCreateSettingHandler}
        loading={loading}
      />
    </div>
  );
};

export default QuizSetting;
