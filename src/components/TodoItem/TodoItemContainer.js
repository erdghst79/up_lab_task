import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

class TodoItemContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...this.state,
      open: props.open,
    };
  }

  // componentDidUpdate(prevProps) {
  //   if (this.props.open !== prevProps.open && this.state.open !== this.props.open) {
  //     this.setState({ open: this.props.open });
  //   }
  // }

  // toggleEdit = (isEdit = !this.state.isEdit) => this.setState({ isEdit });

  onChange = () => {
    // e.preventDefault();
    const { onChange } = this.props;
    this.setState((s) => {
      onChange(!s.open);
      return { open: !s.open };
    });
  };

  render() {
    const { open } = this.state;

    return (
      <TodoItem
        {...this.props}
        onChange={this.onChange}
        // toggleEdit={this.toggleEdit}
        // isEdit={isEdit}
        open={open}
      />
    );
  }
}

TodoItemContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
};

export default TodoItemContainer;
