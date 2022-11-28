/**
 * Report screen component
 */

import { Switch } from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import "../css/main.css";
import DailyReport from "./DailyReport";
import DateReport from "./DateReport";

export default function Report() {
  /**
   * Toogle false show <DailyReport>
   * <DateReport/>
   */


  const [tog, setTog] = useState(true);

  return (
    <div className="container">
      <div className="toggle-report">
        <Switch
          checked={tog}
          onChange={() => {
            setTog(!tog);
          }}
          name="tog"
          color="success"
        />
      </div>
      {tog ? <DateReport data={fake} /> : <DailyReport data={fake}/>}
    </div>
  );
}

// Fakes are creating Fakes
const fake = [
  {
    billNo: 22,
    date: moment().format().toString(),
    orders: [
      {
        productName: "satu",
        price: 100,
        quantity: 20,
        amount: 2000,
      },
      {
        productName: "Orange",
        price: 15,
        quantity: 2,
        amount: 30,
      },
      {
        productName: "coke",
        price: 70,
        quantity: 2,
        amount: 140,
      },
    ],
    subAmount: 2170,
    customerName: "Simon",
    customerAddress: "Kuleshor",
    contactNo: 9856560000,
    printedBy: "INndra",
    paymentMode: "Cash",
    discount: 50,
    taxableAmount: 500,
    vatAmount: 65,
    totalAmount: 5656,
  },
  {
    billNo: 2,
    date: moment().format(),
    orders: [
      {
        productName: "Lapsi",
        price: 50,
        quantity: 11,
        amount: 555,
      },
      {
        productName: "Lacto",
        price: 10,
        quantity: 5,
        amount: 50,
      },
      {
        productName: "aalu",
        price: 100,
        quantity: 1,
        amount: 150,
      },
    ],
    subAmount: 255,
    customerName: "Dio",
    customerAddress: "Balkhu",
    contactNo: 9856550000,
    printedBy: "Uttam",
    paymentMode: "QR",
    discount: 50,
    taxableAmount: 500,
    vatAmount: 65,
    totalAmount: 568,
  },
];
