import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION } from 'react-dates/constants';
import { DATE_FORMAT } from 'constants/date';

const DatePicker = (props) => {
  const { date, onChange, focused, onFocusChange, ...rest } = props;
  return (
    <SingleDatePicker
      date={date}
      onDateChange={onChange}
      focused={focused}
      onFocusChange={onFocusChange}
      showClearDate
      showDefaultInputIcon
      inputIconPosition={ICON_AFTER_POSITION}
      displayFormat={DATE_FORMAT}
      {...rest}
    />
  );
};

export default DatePicker;
