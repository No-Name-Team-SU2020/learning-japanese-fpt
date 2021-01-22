import React from "react";
import SettingItem from "./SettingItem";

const SettingList = ({ settings }) => {
  return (
    <div>
      <div className='d-flex align-items-center justify-content-around bg-secondary text-white p-3'>
        <h5 className='min-width-150'> Number Of Question </h5>
        <h5 className='min-width-150'> Time </h5>
        <h5 className='min-width-150'>Status</h5>
        <h5 className='min-width-150'>Action</h5>
      </div>
      <div className='mb-4'>
        {settings.map((st) => (
          <SettingItem key={st.preset_id} setting={st} />
        ))}
      </div>
    </div>
  );
};

export default SettingList;
