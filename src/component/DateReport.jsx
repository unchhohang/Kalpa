/**
 * Component for report according to date selected
 */

import { Box, Button, Grid, TextField } from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import moment from "moment";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import splitDate from "../helperApi/splitDate";
import ReportTable from "./ReportTable";

export default function DateReport(props) {
  const [pickerDate, setPickerDate] = useState(moment().format());

  let bills = props.bills;

  useEffect(() => {
    console.log(`use effect of DateReport ...`);
    let dArray = JSON.stringify(pickerDate).split("T");
    let cDate = dArray[0].replace('"', "");
    console.log(cDate);

    props.getBills(cDate);
  }, [pickerDate]);

  function onDateChange(newValue) {
    setPickerDate(newValue);
  }

  return (
    <div>
      {/* <h1>Bill Section</h1> */}
      <Box>
        <Grid container spacing={1} justifyContent="center">
          <Grid
            xs={4}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <DesktopDatePicker
              label="Choose date"
              inputFormat="MM/DD/YYYY"
              value={pickerDate}
              onChange={onDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
          </Grid>
          <Grid
            xs={2}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              className="pdf-btn"
              variant="contained"
              color="success"
              size="medium"
              onClick={() => {
                if (bills?.length !== 0) {
                  let uniDate = bills[0].bill_date;
                  let d = splitDate(uniDate);

                  props.exportPdf(d);
                }
              }}
            >
              Export to PDF
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* <div>
        <span>
          <DesktopDatePicker
            label="Choose date"
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
            size="medium"
          >
            Export to PDF
          </Button>
        </span>
      </div> */}

      {bills.length !== 0 && (
        <div>
          <div>
            {bills.length !== 0 && (
              <ReportTable bills={bills} getBills={props.getBills} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
