import React, { Fragment } from 'react';
import { TodoListCard, TodoForm } from 'components';

const TodoList = (props) => {
  const { todos, onCreateTodo, onToggleTodo, onRemoveTodo, actions } = props;
  return (
    <>
      <TodoForm onSubmit={onCreateTodo} />
      <TodoListCard todos={todos} onToggleItem={onToggleTodo} onRemoveItem={onRemoveTodo} actions={actions} />
    </>
  );
};

TodoList.defaultProps = {
  todos: [],
};

export default TodoList;
