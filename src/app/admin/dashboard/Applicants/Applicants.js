import React from "react";
import { Box, Table, TableHead, TableRow, TableCell, Button } from "@mui/material";
import "../Applicants/Applicants.css";

export default function Applicants({ applicants }) {
  // Check if applicants is undefined or null, and provide a fallback empty array
  const applicantList = applicants || [];

  return (
    <Box>
      <Table>
        <TableHead>
          <TableRow style={{ backgroundColor: '#e3f2fd' }}> {/* Light blue background */}
            <TableCell>S.No</TableCell>
            <TableCell>Name / Email</TableCell>
            <TableCell>Phone No</TableCell>
            <TableCell>Job Title</TableCell>
            <TableCell>Services</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <tbody>
          {applicantList.length === 0 ? (
            <TableRow style={{ backgroundColor: '#5D88B2',color:'#fff' }}> {/* Light gray for empty row */}
              <TableCell colSpan={7} align="center">
                No applicants found.
              </TableCell>
            </TableRow>
          ) : (
            applicantList.map((applicant, index) => (
              <TableRow key={index} style={{ backgroundColor: '#5D88B2' }}> {/* Light gray for rows */}
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {applicant.fullName || "Full Name"} / {applicant.email || "Email"}
                </TableCell>
                <TableCell>{applicant.phone || "Phone"}</TableCell>
                <TableCell>{applicant.jobTitle || "Job Title"}</TableCell>
                <TableCell>{applicant.services || "Services"}</TableCell>
                <TableCell>{applicant.date || "Date"}</TableCell>
                <TableCell>
                  <Button variant="contained" color="primary" href="#" size="small">
                    View More
                  </Button>
                </TableCell>
              </TableRow>
            ))
          )}
        </tbody>
      </Table>
    </Box>
  );
}