import { useState } from 'react';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CustomDatePicker = ({ date, setDate }) => {
  var someDate = new Date();
  var numberOfDaysToAdd = 2;
  someDate.setDate(someDate.getDate() + numberOfDaysToAdd);

  const isWeekday = (date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };

  return (
    <DatePicker
      className="buy-datepicker"
      selected={date}
      onChange={(date) => setDate(date)}
      filterDate={isWeekday}
      placeholderText="Datum"
      dateFormat="dd.MM.yyyy"
      minDate={someDate}
      required
    />
  );
};

export default CustomDatePicker;
