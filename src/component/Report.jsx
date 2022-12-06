/**
 * Report screen component
 */

import {
  Box,
  Breadcrumbs,
  Chip,
  Divider,
  Link,
  Switch,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import moment from "moment/moment";
import React, { useState } from "react";
import "../css/main.css";
import DailyReport from "./DailyReport";
import DateReport from "./DateReport";

// import Box from '@mui/material/Box';
// import Tab from '@mui/material/Tab';
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import HomeIcon from "@mui/icons-material/Home";
import AssessmentIcon from "@mui/icons-material/Assessment";

export default function Report() {
  /**
   * Toogle false show <DailyReport>
   * <DateReport/>
   */

  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <>
      <div className="container">
        <Breadcrumbs>
          <Link
            underline="hover"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            EBS
          </Link>
          <Link
            underline="hover"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
            href="/report"
          >
            <AssessmentIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Report
          </Link>
          <Typography color="text.primary">Manage Report</Typography>
        </Breadcrumbs>
        {/* <Divider >
        <Chip label="Report" color="success"/>
      </Divider> */}

        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                centered
                aria-label="lab API tabs example"
              >
                <Tab label="Daily report" value="1" />
                <Tab label="Date wise report" value="2" />
              </TabList>
            </Box>
            <TabPanel value="1">
              <DailyReport data={fake} />
            </TabPanel>
            <TabPanel value="2">
              <DateReport data={fake} />
            </TabPanel>
          </TabContext>
        </Box>
      </div>
    </>
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
