/**
 * Component for report according to date selected
 */

import { Button, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React from "react";
import { useState } from "react";
import ReportTable from "./ReportTable";

export default function DateReport(props) {
  const [pickerDate, setPickerDate] = useState(moment().format());

  function onDateChange(newValue) {
    console.log(`new valuse comming..`);
    console.log(newValue);
    setPickerDate(newValue);
  }

  return (
    <div>
      <h1>Bill Section</h1>
      <div>
        <span>
          <DesktopDatePicker
            label="Date desktop"
            inputFormat="MM/DD/YYYY"
            value={pickerDate}
            onChange={onDateChange}
            renderInput={(params) => <TextField {...params} />}
          />
        </span>
        <span>
          <Button
            className="pdf-btn"
            variant="contained"
            color="success"
            size="small"
          >
            Generate PDF
          </Button>
        </span>
      </div>
      <div>
        <ReportTable data={props.data} />
      </div>
      <div className="report-delete">
        <Button variant="contained" component="label" color="error" size="large" sx={{margin: "10px"}}>
          Delete
        </Button>
      </div>
    </div>
  );
}
