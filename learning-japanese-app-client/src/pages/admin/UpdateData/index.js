import { Button } from "@material-ui/core";
import React, { useState } from "react";
import axios from "../../../store/api/axios";
import { useDispatch } from "react-redux";
import { alert } from "../../../store/actions/ui/ui";

const UpdateData = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const syncDataHandler = async (url, message) => {
    setLoading(true);
    try {
      await axios.post(url);
      setLoading(false);
      dispatch(alert("success", "Sync " + message + " data success!"));
    } catch (_) {
      dispatch(alert("error", "Sync " + message + " data failed!"));
      setLoading(false);
    }
  };
  return (
    <div className='app-container py-3'>
      <div className='row'>
        <div className='col-4'>
          <Button
            variant='contained'
            color='primary'
            onClick={() =>
              syncDataHandler("/admin/classes-subjects", "Subject")
            }
            className='bg-orange-imp mb-3'
          >
            Sync Subject Data
          </Button>
          <br />
          <Button
            variant='contained'
            color='primary'
            onClick={() =>
              syncDataHandler("/admin/teachers-classes", "Teacher Class")
            }
            className='bg-orange-imp mb-3'
          >
            Sync Teacher Class Data
          </Button>
          <br />
          <Button
            variant='contained'
            color='primary'
            onClick={() =>
              syncDataHandler("/admin/teachers-subjects", "Teacher Subject")
            }
            className='bg-orange-imp mb-3'
          >
            Sync Teacher Subject Data
          </Button>
          <br />
          <Button
            variant='contained'
            color='primary'
            onClick={() =>
              syncDataHandler("/admin/students-classes", "Student Class")
            }
            className='bg-orange-imp mb-3'
          >
            Sync Student Class Data
          </Button>
          <br />
          <Button
            variant='contained'
            color='primary'
            onClick={() =>
              syncDataHandler("/admin/students-subjects", "Student Subject")
            }
            className='bg-orange-imp mb-3'
          >
            Sync Student Subject Data
          </Button>
          <br />
          <Button
            variant='contained'
            color='primary'
            onClick={() => syncDataHandler("/admin/attendances", "Attendances")}
            className='bg-orange-imp mb-3'
          >
            Sync Attendances Data
          </Button>
        </div>
        <div className='col-6'>
          {loading && (
            <img
              style={{
                width: "350px",
                margin: "20px auto",
                display: "block",
              }}
              alt='loader'
              src='https://i.gifer.com/YCZH.gif'
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UpdateData;
