/**
 * Component for bill as table in Report
 */

import {
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React from "react";
import { useState } from "react";

export default function ReportTable(props) {
  console.log(props.data);
  let data = props.data;

  const [bill, setBill] = useState(data[1]);

  let billLength = data.length;

  return (
    <div className="table-container">
      <div className="table-top">
        <span>
          <h3>Bill NO: {bill.billNo}</h3>
        </span>
        <span>
          <h3>Date: {bill.date}</h3>
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
              {bill.orders.map((x, index) => {
                return (
                  <TableRow
                    // key={}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{x.productName}</TableCell>
                    <TableCell>{x.price}</TableCell>
                    <TableCell>{x.quantity}</TableCell>
                    <TableCell>{x.amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>

        <div>
          <span className="sub-total">Sub Total: {bill.subAmount} </span>
        </div>
      </div>
      <div className="table-details">
        <span className="detail">
          {" "}
          <span>Customer Name:</span> <span>{bill.customerName}</span>{" "}
        </span>
        <span className="detail">
          <Typography>Customer Address: {bill.customerAddress}</Typography>
        </span>
        <span className="detail">
          <Typography>Contact No: {bill.contactNo} </Typography>
        </span>
        <span className="detail">Printed By: {bill.printedBy}</span>
        <span className="detail">Payment Mode: {bill.paymentMode}</span>
        <span className="detail">Discount: {bill.discount}</span>
        <span className="detail">Taxable amount: {bill.taxableAmount}</span>
        <span className="detail">VAT amount: {bill.vatAmount}</span>
        <span className="detail">Total amount: {bill.totalAmount}</span>
      </div>

      <div>
        <Pagination
          count={billLength}
          onChange={(e, p) => {
            console.log(`in page ${p}`);
            setBill(data[p - 1]);
          }}
        />
      </div>
    </div>
  );
}
