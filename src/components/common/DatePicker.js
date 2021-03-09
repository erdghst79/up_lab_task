import React from 'react';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import { ICON_AFTER_POSITION } from 'react-dates/constants';
import { DATE_FORMAT } from 'constants/date';

export default function DatePicker(props) {
  const { onChange, ...rest } = props;
  const [isFocused, setIsFocused] = React.useState(false);
  const onFocusChange = React.useCallback(({ focused }) => setIsFocused(focused), []);

  return (
    <SingleDatePicker
      onDateChange={onChange}
      focused={isFocused}
      onFocusChange={onFocusChange}
      showClearDate
      showDefaultInputIcon
      inputIconPosition={ICON_AFTER_POSITION}
      displayFormat={DATE_FORMAT}
      {...rest}
    />
  );
}
