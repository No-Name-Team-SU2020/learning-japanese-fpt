import React from "react";
import Switch from "react-switch";
import { IconButton } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useDispatch } from "react-redux";
import {
  deleteQuizPreset,
  updateQuizPresetStatus,
} from "../../../store/actions/admin";

const SettingItem = ({ setting }) => {
  const dispatch = useDispatch();
  const changeActiveModeHandler = () => {
    dispatch(updateQuizPresetStatus(!setting.is_chosen, setting.preset_id));
  };
  return (
    <div className="d-flex align-items-center justify-content-around rounded shadow p-3 mt-2">
      <div className="min-width-150">
        {setting.number_of_questions} questions
      </div>
      <div className="min-width-150">{setting.quiz_time} minutes</div>
      <div className="min-width-150">
        <Switch
          checked={setting.is_chosen}
          onChange={changeActiveModeHandler}
        />
      </div>
      <div className="min-width-150">
        <IconButton
          onClick={() => {
            dispatch(deleteQuizPreset(setting.preset_id));
          }}
        >
          <DeleteIcon color="secondary" />
        </IconButton>
      </div>
    </div>
  );
};

export default SettingItem;
