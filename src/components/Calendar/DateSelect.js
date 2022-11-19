import { Box } from "@mui/system";
import React, { useState } from "react";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { CalendarPicker } from "@mui/x-date-pickers/CalendarPicker";
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
export const DateSelect = () => {
  const [date, setDate] = useState(dayjs(new Date()));
  const [value, setValue] = React.useState(dayjs('2022-04-07'));
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {/* <CalendarPicker date={date} onChange={(newDate) => setDate(newDate)} /> */}

        <StaticDatePicker
          displayStaticWrapperAs="desktop"
          openTo="year"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
            console.log(newValue);
          }}
        //   renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </Box>
  );
};
