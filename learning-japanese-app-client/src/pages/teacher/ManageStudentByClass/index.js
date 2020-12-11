import React, { useState, useEffect } from "react";
import Loader from "../../../components/ui/Loader/Loader";
import axios from "../../../store/api/axios";
import {
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { Link } from "react-router-dom";

const ManageStudentByClass = ({ match }) => {
  const { cId } = match.params;
  const [loading, setLoading] = useState(false);
  const [classData, setClassData] = useState({});
  useEffect(() => {
    setLoading(true);
    axios
      .get(`/teacher/class-students/${cId}`)
      .then((res) => {
        setLoading(false);
        if (res.data.data[0]) {
          setClassData(res.data.data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        alert("Something went wrong");
      });
  }, [cId]);
  return (
    <div>
      {loading && <Loader />}
      {!loading && classData.class_name && (
        <>
          <h3>{classData?.class_name}</h3>
          <TableContainer className='shadow rounded'>
            <Table aria-label='lessons table'>
              <TableHead>
                <TableRow>
                  <TableCell>STT</TableCell>
                  <TableCell>Avatar</TableCell>
                  <TableCell>Full Name</TableCell>
                  <TableCell>User Name</TableCell>
                  <TableCell>Review</TableCell>
                  <TableCell>Attendance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {classData?.students?.map((student, index) => (
                  <TableRow key={student.student_id}>
                    <TableCell component='th' scope='row'>
                      {index}
                    </TableCell>
                    <TableCell>
                      <img
                        src={
                          student.student_image ||
                          "https://media.istockphoto.com/photos/illustration-of-smiling-happy-man-with-laptop-sitting-in-armchair-picture-id1226886130"
                        }
                        alt=''
                        className='student-avatar'
                      />
                    </TableCell>
                    <TableCell>{student.student_name}</TableCell>
                    <TableCell>{student.user_name}</TableCell>
                    <TableCell>
                      <Link to='/'>View</Link>
                    </TableCell>
                    <TableCell>
                      <IconButton>
                        <EditIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}
    </div>
  );
};

export default ManageStudentByClass;
