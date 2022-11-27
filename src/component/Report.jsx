/**
 * Report screen component
 */

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import "../css/main.css";

export default function Report() {
  return (
    <div className="container">
      <div className="heads">
        <h1>Daily Report</h1>
      </div>
      <div className="table-container">
        <div className="table-top">
          <span>
            <h3>Bill NO: 1245</h3>
          </span>
          <span>
            <h3>Date: 9/12/2022</h3>
          </span>
        </div>
        <div>
          <TableContainer className="custome-table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3>Product Name</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Price</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Quantity</h3>
                  </TableCell>
                  <TableCell>
                    <h3>Amount</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
                <TableRow
                  // key={}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>Sathu</TableCell>
                  <TableCell>200</TableCell>
                  <TableCell></TableCell>
                  <TableCell>Sathu</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <div>
            <span className="sub-total">Sub Total: 500 </span>
          </div>
        </div>
        <div className="table-details">
          <span className="detail">
            {" "}
            <span>Customer Name:</span> <span>Simon Shrestha</span>{" "}
          </span>
          <span className="detail">
            <Typography>Customer Address: Kuleshwar, Balkhu</Typography>
          </span>
          <span className="detail">
            <Typography>Contact No: 985216574 </Typography>
          </span>
          <span className="detail">Printed By: Hang</span>
          <span className="detail">Payment Mode: QR</span>
          <span className="detail">Discount: 10</span>
          <span className="detail">Taxable amount: 20</span>
          <span className="detail">VAT amount: 10</span>
          <span className="detail">Total amount: 200</span>
        </div>
      </div>
    </div>
  );
}
