import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

// import getDay from 'react-datepicker';
const CustomDatePicker = ({ date, setDate }) => {
  const isWeekday = (date) => {
    const today = new Date();
    const day = date.getDay();
    return day !== 0 && day !== 6 && today < date + 1;
  };

  return (
    <DatePicker
      className="buy-datepicker"
      selected={date}
      onChange={(date) => setDate(date)}
      filterDate={isWeekday}
      placeholderText="Datum"
    />
  );
};

export default CustomDatePicker;
