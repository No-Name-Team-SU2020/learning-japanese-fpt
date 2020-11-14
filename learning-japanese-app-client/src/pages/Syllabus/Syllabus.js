import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { syllabusItems } from '../../temporary-data/data';

const Syllabus = () => {
  return (
    <Fragment>
      <h1 className="my-3"> Japanese 121's Syllabus </h1>
      <TableContainer component={Paper} className="mb-3">
        <Table>
          <TableHead className="bg-dark">
            <TableRow>
              <TableCell className="text-white">Session</TableCell>
              <TableCell className="text-white">Topic</TableCell>
              <TableCell className="text-white">Student Materials</TableCell>
              <TableCell className="text-white">Teacher Materials</TableCell>
              <TableCell className="text-white">Activities</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              syllabusItems.map((syllabus, index) => (
                <TableRow key={syllabus.id}>
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell>
                    {
                      syllabus.topics.map(topic => <p key={topic.id}>
                        {topic.name}
                      </p>
                      )
                    }
                  </TableCell>
                  <TableCell>{syllabus.studentMaterials}</TableCell>
                  <TableCell>{syllabus.teacherMaterials}</TableCell>
                  <TableCell>{syllabus.activity}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
    </Fragment>
  )
}

export default Syllabus;
