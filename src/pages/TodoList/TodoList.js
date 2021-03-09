import React, { Fragment } from 'react';

import TodoListCard from './components/TodoListCard';
import TodoForm from './components/TodoForm';

export default function TodoList() {
  return (
    <>
      <TodoForm />
      <TodoListCard />
    </>
  );
}
