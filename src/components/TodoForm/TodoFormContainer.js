import React, { Component } from 'react';
import _ from 'lodash';
import TodoForm from './TodoForm';

export default class TodoFormContainer extends Component {
  initialState = {
    message: '',
  };

  constructor(props) {
    super(props);

    const { message = '', dueDate } = props;

    this.state = {
      message,
      dueDate,
    };
  }

  handleChangeMessage = (e) => this.setState({ message: e.target.value });

  handleChangeDueDate = (dueDate) => {
    this.setState({ dueDate: _.isNil(dueDate) ? undefined : dueDate });
  };

  onSubmit = (event) => {
    if (event && event.preventDefault) event.preventDefault();
    const { message, dueDate } = this.state;
    const { onSubmit } = this.props;
    onSubmit({ message, dueDate: dueDate ? dueDate.toDate().getTime() : dueDate });
    this.setState({ ...this.initialState });
  };

  render() {
    const { message, dueDate } = this.state;
    return (
      <TodoForm
        message={message}
        dueDate={dueDate}
        handleChangeMessage={this.handleChangeMessage}
        handleChangeDueDate={this.handleChangeDueDate}
        onSubmit={this.onSubmit}
      />
    );
  }
}
