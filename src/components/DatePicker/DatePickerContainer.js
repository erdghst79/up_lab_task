import React, { Component } from 'react';
import DatePicker from './DatePicker';

export class DatePickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: null,
      date: null,
    };
  }

  onFocusChange = ({ focused }) => this.setState({ focused });

  onChange = (date) => {
    const { onChange } = this.props;
    onChange(date);
  };

  render() {
    const { date, focused } = this.state;
    console.log(focused);
    return (
      <DatePicker
        date={date}
        focused={focused}
        onFocusChange={this.onFocusChange}
        {...this.props}
        onChange={this.onChange}
      />
    );
  }
}

export default DatePickerContainer;
